import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnqkeyo-y.css';
import '../../css/d/dsivx0b3n.css';
import '../../css/t/ty0jsobdg.css';
import '../../css/y/ynzitvc6s.css';
import '../../css/o/od026lbdp.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="ft5dv1b6b"><path class="fnqkeyo-y"/><path class="dsivx0b3n"/><path class="ty0jsobdg"/><path class="ynzitvc6s"/><path class="od026lbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:search"} {...others} />);
}

export default Component;

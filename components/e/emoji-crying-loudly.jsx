import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/f/f0jx1ybtg.css';
import '../../css/z/z5r438b7j.css';
import '../../css/y/yl35v5b2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="f0jx1ybtg"/><rect class="z5r438b7j"/><path class="yl35v5b2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:emoji-crying-loudly"} {...others} />);
}

export default Component;

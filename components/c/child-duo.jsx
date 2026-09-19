import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-q28tsmg.css';
import '../../css/y/yfd1ljmjm.css';
import '../../css/h/h94fm9bsp.css';
import '../../css/f/fytkmobqa.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a-q28tsmg"/><path class="yfd1ljmjm"/><path class="h94fm9bsp"/><path class="fytkmobqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:child-duo"} {...others} />);
}

export default Component;

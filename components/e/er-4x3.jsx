import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fyx689bhp.css';
import '../../css/y/yo-0d2b8v.css';
import '../../css/d/d7zy1m0xm.css';
import '../../css/j/je6v3o-lb.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="fyx689bhp"/><path class="yo-0d2b8v"/><path class="d7zy1m0xm"/><path class="je6v3o-lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:er-4x3"} {...others} />);
}

export default Component;

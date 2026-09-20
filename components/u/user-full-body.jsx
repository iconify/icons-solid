import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5kijyb6p.css';
import '../../css/d/dhhx1wbsr.css';
import '../../css/m/m7jb6ub8v.css';
import '../../css/t/t111xcc8u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u5kijyb6p"/><path class="dhhx1wbsr"/><path class="m7jb6ub8v"/><path class="t111xcc8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-full-body"} {...others} />);
}

export default Component;

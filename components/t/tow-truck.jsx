import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nso-06b-q.css';
import '../../css/z/zf0gdub7b.css';
import '../../css/b/bouo_5bdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nso-06b-q"/><path class="zf0gdub7b"/><path class="bouo_5bdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tow-truck"} {...others} />);
}

export default Component;

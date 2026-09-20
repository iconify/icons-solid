import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bbpy9nbbh.css';
import '../../css/z/zz0yp4bhr.css';
import '../../css/n/n6ytud-wm.css';
import '../../css/t/t308wjbmr.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="h01tyzbfu"><path class="bbpy9nbbh"/><path class="zz0yp4bhr"/><path class="n6ytud-wm"/><path class="t308wjbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:react-outline"} {...others} />);
}

export default Component;

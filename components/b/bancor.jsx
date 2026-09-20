import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zev6fxbep.css';
import '../../css/p/pj_m2ybgk.css';
import '../../css/v/v0uywbt6s.css';

const viewBox = {"width":269.57,"height":90.72};
const content = `<path class="zev6fxbep"/><path class="pj_m2ybgk"/><path class="v0uywbt6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bancor"} {...others} />);
}

export default Component;

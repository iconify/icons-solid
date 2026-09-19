import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvwcv7zoy.css';
import '../../css/m/m2lu62qxv.css';
import '../../css/p/pld9u5fxp.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="cvwcv7zoy"/><path class="m2lu62qxv"/><path class="pld9u5fxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ga-4x3"} {...others} />);
}

export default Component;

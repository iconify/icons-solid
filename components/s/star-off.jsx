import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xm1miebeb.css';
import '../../css/k/koa44ygtc.css';
import '../../css/e/e1cglzaru.css';
import '../../css/e/ekuo8dzap.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xm1miebeb"/><path class="koa44ygtc wm-shadow"/><path class="e1cglzaru"/><path class="ekuo8dzap"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:star-off"} {...others} />);
}

export default Component;

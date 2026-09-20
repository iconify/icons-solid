import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9ccdbb-o.css';
import '../../css/z/zp2_pxhww.css';
import '../../css/f/fsg9ixbfy.css';
import '../../css/x/x7cavfr9r.css';
import '../../css/m/mywxi0eqk.css';
import '../../css/v/vk9ng-1-j.css';
import '../../css/t/ty2abwhcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9ccdbb-o"/><path class="zp2_pxhww"/><path class="fsg9ixbfy"/><path class="x7cavfr9r"/><path class="mywxi0eqk"/><path class="vk9ng-1-j"/><path class="ty2abwhcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gaming-ribbon-first"} {...others} />);
}

export default Component;

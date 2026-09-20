import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y0e45cpkr.css';
import '../../css/u/ug6dxlz6p.css';
import '../../css/m/md_24xyqd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="y0e45cpkr"/><path class="ug6dxlz6p"/><path class="md_24xyqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:tall-hat"} {...others} />);
}

export default Component;

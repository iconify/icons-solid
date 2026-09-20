import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/f-f4m3bjf.css';
import '../../css/k/k_gz_fskv.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ij2x_72vy"><path class="f-f4m3bjf"/><path class="k_gz_fskv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fast-up-button"} {...others} />);
}

export default Component;

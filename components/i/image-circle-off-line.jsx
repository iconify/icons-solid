import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frmwi0b4d.css';
import '../../css/u/umr_xtqvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="frmwi0b4d"/><path class="umr_xtqvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-circle-off-line"} {...others} />);
}

export default Component;

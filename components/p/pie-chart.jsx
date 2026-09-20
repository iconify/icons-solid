import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgq5-yptf.css';
import '../../css/z/zb2pfgf5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sgq5-yptf"/><path class="zb2pfgf5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pie-chart"} {...others} />);
}

export default Component;

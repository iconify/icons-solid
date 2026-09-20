import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fw_j-yrpn.css';
import '../../css/l/l-wkcy2wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fw_j-yrpn"/><path class="l-wkcy2wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:disabled"} {...others} />);
}

export default Component;

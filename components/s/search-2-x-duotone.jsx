import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zu7ckv_si.css';
import '../../css/h/hkm691nvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zu7ckv_si"/><path class="hkm691nvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-x-duotone"} {...others} />);
}

export default Component;

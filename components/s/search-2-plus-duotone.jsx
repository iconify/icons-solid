import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zu7ckv_si.css';
import '../../css/y/yawpv7fca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zu7ckv_si"/><path class="yawpv7fca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-plus-duotone"} {...others} />);
}

export default Component;

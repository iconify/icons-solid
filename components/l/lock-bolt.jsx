import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmam8_bae.css';
import '../../css/z/zg29vyspn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mmam8_bae"/><path class="zg29vyspn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-bolt"} {...others} />);
}

export default Component;

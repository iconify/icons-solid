import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t6op9z_rl.css';
import '../../css/z/zewaj38ia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t6op9z_rl"/><path class="zewaj38ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vault-duocolor-round"} {...others} />);
}

export default Component;

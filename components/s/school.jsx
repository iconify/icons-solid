import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dl_z_ebww.css';
import '../../css/c/crqtt_qaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dl_z_ebww"/><path class="crqtt_qaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:school"} {...others} />);
}

export default Component;

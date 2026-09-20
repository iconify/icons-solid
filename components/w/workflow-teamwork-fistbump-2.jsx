import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vhy98kjap.css';
import '../../css/k/k8v4_t7ll.css';
import '../../css/v/vqc80lbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vhy98kjap"/><path class="k8v4_t7ll"/><path class="vqc80lbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:workflow-teamwork-fistbump-2"} {...others} />);
}

export default Component;

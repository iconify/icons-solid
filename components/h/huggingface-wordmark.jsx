import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdhrlnphl.css';
import '../../css/d/drbu3zb8y.css';
import '../../css/m/mol134btx.css';
import '../../css/t/t5hp_obfp.css';
import '../../css/k/k36i95p_h.css';
import '../../css/p/pjnb8bc5h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pdhrlnphl"/><path class="drbu3zb8y"/><path class="mol134btx"/><path clip-rule="evenodd" class="t5hp_obfp"/><path clip-rule="evenodd" class="k36i95p_h"/><path class="pjnb8bc5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:huggingface-wordmark"} {...others} />);
}

export default Component;

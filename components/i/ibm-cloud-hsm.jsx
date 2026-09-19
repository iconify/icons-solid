import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs1m6rt0a.css';
import '../../css/o/onr7_4buh.css';
import '../../css/e/eqzj32bze.css';
import '../../css/o/obo5obcev.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hs1m6rt0a"/><circle class="onr7_4buh"/><circle class="eqzj32bze"/><path class="obo5obcev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-hsm"} {...others} />);
}

export default Component;

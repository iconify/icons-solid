import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nli8e_okq.css';
import '../../css/y/y1ckru8vk.css';
import '../../css/f/fdr9_5b4a.css';
import '../../css/g/gkpv9tbuv.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="nli8e_okq"/><path class="y1ckru8vk"/><path class="fdr9_5b4a"/><path class="gkpv9tbuv"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:microphone-handheld-circle-filled"} {...others} />);
}

export default Component;

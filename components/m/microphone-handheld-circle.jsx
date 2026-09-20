import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nli8e_okq.css';
import '../../css/y/y1ckru8vk.css';
import '../../css/f/fdr9_5b4a.css';
import '../../css/g/gkpv9tbuv.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nli8e_okq"/><path class="y1ckru8vk"/><path class="fdr9_5b4a"/><path class="gkpv9tbuv"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:microphone-handheld-circle"} {...others} />);
}

export default Component;

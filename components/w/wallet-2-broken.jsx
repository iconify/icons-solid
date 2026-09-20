import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vkq46fbed.css';
import '../../css/m/m1-6nzrja.css';
import '../../css/a/a_dpsab4r.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vkq46fbed"/><path class="m1-6nzrja"/><path class="a_dpsab4r"/><path class="t2jvb6bpe"/><path class="t2jvb6bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-2-broken"} {...others} />);
}

export default Component;

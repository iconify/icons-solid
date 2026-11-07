import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9a5saclq.css';
import '../../css/i/ic59sq0-o.css';
import '../../css/a/a8ue-2cgj.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p9a5saclq"/><path class="ic59sq0-o"/><path class="a8ue-2cgj"/><path class="t2jvb6bpe"/><path class="t2jvb6bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-2-broken"} {...others} />);
}

export default Component;

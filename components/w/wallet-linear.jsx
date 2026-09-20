import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acmhcgbix.css';
import '../../css/p/py4d89c_p.css';
import '../../css/s/sttwmdmph.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="acmhcgbix"/><path class="py4d89c_p"/><path class="sttwmdmph"/><path class="t2jvb6bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-linear"} {...others} />);
}

export default Component;

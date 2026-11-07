import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acmhcgbix.css';
import '../../css/r/rf3amc9mv.css';
import '../../css/t/t2jvb6bpe.css';
import '../../css/i/ic59sq0-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="acmhcgbix"/><path class="rf3amc9mv"/><path class="t2jvb6bpe"/><path class="ic59sq0-o"/><path class="t2jvb6bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-broken"} {...others} />);
}

export default Component;

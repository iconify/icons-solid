import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tfmtz425a.css';
import '../../css/t/tm2l-nbzh.css';
import '../../css/k/kugbtdbkv.css';
import '../../css/l/l4nf9kbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tfmtz425a"/><path class="tm2l-nbzh"/><path class="kugbtdbkv"/><path class="l4nf9kbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-house-2"} {...others} />);
}

export default Component;

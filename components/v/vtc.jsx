import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4sr2pbuv.css';
import '../../css/z/zzdukib6s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="p4sr2pbuv"/><path class="zzdukib6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:vtc"} {...others} />);
}

export default Component;

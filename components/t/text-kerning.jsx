import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-rsyob2p.css';
import '../../css/l/ln__c5bfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k-rsyob2p"/><path class="ln__c5bfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-kerning"} {...others} />);
}

export default Component;

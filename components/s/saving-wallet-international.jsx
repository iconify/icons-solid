import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eru7w6gtf.css';
import '../../css/p/p6pyttbii.css';
import '../../css/k/kpsrmabjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eru7w6gtf"/><path class="p6pyttbii"/><path class="kpsrmabjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:saving-wallet-international"} {...others} />);
}

export default Component;

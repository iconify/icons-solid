import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgr_-3hoc.css';
import '../../css/t/tj4uxztpt.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dgr_-3hoc"/><path class="tj4uxztpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bill-4-solid"} {...others} />);
}

export default Component;

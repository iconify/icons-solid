import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opmu8tq_u.css';
import '../../css/a/asa3nfbte.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="opmu8tq_u"/><path class="asa3nfbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:airplane-disabled"} {...others} />);
}

export default Component;

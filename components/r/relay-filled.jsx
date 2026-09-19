import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o63_pcrtn.css';
import '../../css/x/x6pji6bmo.css';
import '../../css/w/w33bj_o2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o63_pcrtn"/><path class="x6pji6bmo"/><path class="w33bj_o2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:relay-filled"} {...others} />);
}

export default Component;

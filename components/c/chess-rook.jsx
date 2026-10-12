import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9bcybcxn.css';
import '../../css/g/g5o4zccob.css';
import '../../css/f/f39w6ibxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9bcybcxn"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="f39w6ibxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chess-rook"} {...others} />);
}

export default Component;

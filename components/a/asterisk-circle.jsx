import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnsk1ccqt.css';
import '../../css/p/pdtyp5bhv.css';
import '../../css/i/iic4yoh9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="gnsk1ccqt"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="pdtyp5bhv"/><path class="iic4yoh9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:asterisk-circle"} {...others} />);
}

export default Component;

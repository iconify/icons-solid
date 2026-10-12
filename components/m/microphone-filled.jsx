import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5lfijrig.css';
import '../../css/o/orz70cckh.css';
import '../../css/h/h0uafv4dn.css';
import '../../css/t/to8e0bbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y5lfijrig"/><path class="orz70cckh"/><rect transform="matrix(0 -1 -1 0 16.1 14.52)" class="h0uafv4dn"/><path class="to8e0bbpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microphone-filled"} {...others} />);
}

export default Component;

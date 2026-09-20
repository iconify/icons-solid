import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vun0ddrph.css';
import '../../css/s/sv57hgpcx.css';
import '../../css/d/dn10j6v4j.css';
import '../../css/f/f-n3xro7a.css';
import '../../css/p/pxo13_1dv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vun0ddrph"/><path class="sv57hgpcx"/><path class="dn10j6v4j"/><path clip-rule="evenodd" class="f-n3xro7a"/><path class="pxo13_1dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-full-minimalistic-outline"} {...others} />);
}

export default Component;

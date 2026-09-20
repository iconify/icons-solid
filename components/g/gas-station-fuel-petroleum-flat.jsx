import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f--ss6bbr.css';
import '../../css/f/fyis-ma8b.css';
import '../../css/h/hd22bqb_b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f--ss6bbr"/><path class="fyis-ma8b"/><path clip-rule="evenodd" class="hd22bqb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gas-station-fuel-petroleum-flat"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gspfgze7k.css';
import '../../css/g/ggozx156l.css';
import '../../css/t/tkf14mthh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gspfgze7k wm-shadow"/><path class="ggozx156l wm-shadow"/><path class="tkf14mthh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:barcode"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lbl9v9c8p.css';
import '../../css/i/i00dwn3uz.css';
import '../../css/c/cunv8wbhl.css';
import '../../css/i/i-x1vnzsf.css';
import '../../css/r/roh-reler.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="lbl9v9c8p"/><path class="i00dwn3uz"/><path class="cunv8wbhl"/><path class="i-x1vnzsf"/><path class="roh-reler"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:swatch"} {...others} />);
}

export default Component;

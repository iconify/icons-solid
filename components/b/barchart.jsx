import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcpug3b7d.css';
import '../../css/d/d87ud_bsv.css';
import '../../css/a/a_bbs6b7a.css';
import '../../css/b/boq1zg2ir.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fcpug3b7d"/><path class="d87ud_bsv"/><path class="a_bbs6b7a"/><path class="boq1zg2ir"/><path class="rfmo84bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:barchart"} {...others} />);
}

export default Component;

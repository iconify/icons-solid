import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvoiwcq4f.css';
import '../../css/l/la4p02b-f.css';
import '../../css/l/lwkqk3b_i.css';
import '../../css/b/bqtcasd4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bvoiwcq4f"/><path class="la4p02b-f"/><path class="lwkqk3b_i"/><path class="bqtcasd4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-sparkle"} {...others} />);
}

export default Component;

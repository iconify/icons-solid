import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp8wsgb-c.css';
import '../../css/i/iskl3g_ta.css';
import '../../css/e/eia-h3blx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mp8wsgb-c"/><path class="iskl3g_ta"/><path class="eia-h3blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-smile"} {...others} />);
}

export default Component;

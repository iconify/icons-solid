import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/i/i4z_5rb7o.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/b/b4h-uwbyi.css';
import '../../css/x/x5ivv0_6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="i4z_5rb7o"/><path class="vzkhs6b9b"/><path class="b4h-uwbyi"/><path class="x5ivv0_6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-map-pin"} {...others} />);
}

export default Component;

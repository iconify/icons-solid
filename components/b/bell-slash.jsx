import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mb0h31oir.css';
import '../../css/q/qd_hqobgv.css';
import '../../css/v/v__h_gffi.css';
import '../../css/p/pd6vc2bsb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mb0h31oir"/><path clip-rule="evenodd" class="qd_hqobgv"/><path clip-rule="evenodd" class="v__h_gffi"/><path class="pd6vc2bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bell-slash"} {...others} />);
}

export default Component;

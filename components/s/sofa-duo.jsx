import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k89cfmtkm.css';
import '../../css/j/jvbzfrb1r.css';
import '../../css/d/dsgw4pnpv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k89cfmtkm"/><path class="jvbzfrb1r"/><path class="dsgw4pnpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sofa-duo"} {...others} />);
}

export default Component;

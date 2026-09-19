import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uy7yc_pvs.css';
import '../../css/r/ry01t6waz.css';
import '../../css/k/ki9b28bbv.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uy7yc_pvs"/><path class="ry01t6waz"/><path class="ki9b28bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:door-open-1-bold"} {...others} />);
}

export default Component;

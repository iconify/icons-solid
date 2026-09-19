import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3-609uay.css';
import '../../css/q/qg1124b7z.css';
import '../../css/g/ggyc5ns_y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d3-609uay"/><path class="qg1124b7z"/><path class="ggyc5ns_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-2-duo"} {...others} />);
}

export default Component;

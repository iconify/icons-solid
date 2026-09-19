import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfc4iruyy.css';
import '../../css/q/qadwn_bgu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qfc4iruyy"/><path class="qadwn_bgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:aperture-bold"} {...others} />);
}

export default Component;

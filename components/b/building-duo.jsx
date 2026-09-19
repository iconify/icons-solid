import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbl52hexa.css';
import '../../css/u/uf15v2ukv.css';
import '../../css/k/k4z577z4r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xbl52hexa"/><path class="uf15v2ukv"/><path class="k4z577z4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-duo"} {...others} />);
}

export default Component;

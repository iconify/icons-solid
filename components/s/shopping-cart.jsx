import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz-zwdqsc.css';
import '../../css/n/n9_gztbdw.css';
import '../../css/i/i-5ejf2qe.css';
import '../../css/y/yj742hgsp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xz-zwdqsc"/><path class="n9_gztbdw"/><path class="i-5ejf2qe"/><path class="yj742hgsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shopping-cart"} {...others} />);
}

export default Component;

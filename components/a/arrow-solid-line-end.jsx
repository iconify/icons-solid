import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myb-o0u2k.css';
import '../../css/v/vibnyzb4c.css';
import '../../css/a/a9azocbll.css';
import '../../css/k/k-ui4ib0p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="myb-o0u2k"/><path class="vibnyzb4c"/><path class="a9azocbll"/><path class="k-ui4ib0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrow-solid-line-end"} {...others} />);
}

export default Component;

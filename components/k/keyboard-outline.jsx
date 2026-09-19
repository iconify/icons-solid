import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au-rp_b6w.css';
import '../../css/k/kzl624k_z.css';
import '../../css/m/mve3u90ux.css';
import '../../css/m/m80nkbbsv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="au-rp_b6w"/><path clip-rule="evenodd" class="kzl624k_z"/><path class="mve3u90ux"/><path clip-rule="evenodd" class="m80nkbbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:keyboard-outline"} {...others} />);
}

export default Component;

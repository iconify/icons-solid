import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oc7xiubde.css';
import '../../css/m/m51gvsb7x.css';
import '../../css/z/z13-pabfj.css';
import '../../css/k/k65lz2a_u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oc7xiubde"/><path class="m51gvsb7x"/><path class="z13-pabfj"/><path class="k65lz2a_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:save-1"} {...others} />);
}

export default Component;

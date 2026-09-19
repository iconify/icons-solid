import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj43ppoag.css';
import '../../css/y/ymqifpb2e.css';
import '../../css/h/hr9jw4qtz.css';
import '../../css/z/z7pd3exzs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lj43ppoag"/><path class="ymqifpb2e"/><path class="hr9jw4qtz"/><path class="z7pd3exzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-sticky-duo"} {...others} />);
}

export default Component;

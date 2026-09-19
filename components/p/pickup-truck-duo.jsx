import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csptg4b9v.css';
import '../../css/h/heeygwb2h.css';
import '../../css/l/l9ophzv3f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="csptg4b9v"/><path class="heeygwb2h"/><path class="l9ophzv3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pickup-truck-duo"} {...others} />);
}

export default Component;

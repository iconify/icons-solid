import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7w-jwb5w.css';
import '../../css/j/jc_hrb9vb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="m7w-jwb5w"/><path class="jc_hrb9vb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sliders-duo"} {...others} />);
}

export default Component;

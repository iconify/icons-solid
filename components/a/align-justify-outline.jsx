import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx2bnqncx.css';
import '../../css/b/bg0e3kb9w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gx2bnqncx"/><path class="bg0e3kb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-justify-outline"} {...others} />);
}

export default Component;

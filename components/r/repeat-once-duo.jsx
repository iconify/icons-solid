import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbd7lobfc.css';
import '../../css/y/yhs7tmz9s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xbd7lobfc"/><path class="yhs7tmz9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:repeat-once-duo"} {...others} />);
}

export default Component;

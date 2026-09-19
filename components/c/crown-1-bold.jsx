import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wete5r8ng.css';
import '../../css/b/bvox4ywgs.css';
import '../../css/b/buj03-bwd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wete5r8ng"/><path class="bvox4ywgs"/><path class="buj03-bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-1-bold"} {...others} />);
}

export default Component;

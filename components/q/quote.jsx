import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xel_qjvvf.css';
import '../../css/d/dxpqquqan.css';
import '../../css/v/vw1njlwto.css';
import '../../css/b/bpbf5viwi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xel_qjvvf"/><path class="dxpqquqan"/><path clip-rule="evenodd" class="vw1njlwto"/><path class="bpbf5viwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:quote"} {...others} />);
}

export default Component;

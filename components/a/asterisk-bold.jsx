import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/d/daixnlptx.css';
import '../../css/o/ox5vs-b5d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="daixnlptx"/><path class="ox5vs-b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:asterisk-bold"} {...others} />);
}

export default Component;

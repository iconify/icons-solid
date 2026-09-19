import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8c3n5wqq.css';
import '../../css/f/fyntx0zul.css';
import '../../css/y/ym8aceb4z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z8c3n5wqq"/><path clip-rule="evenodd" class="fyntx0zul"/><path class="ym8aceb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:rocket"} {...others} />);
}

export default Component;

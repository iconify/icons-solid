import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2y7ucbxf.css';
import '../../css/s/sh07jntld.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y2y7ucbxf"/><path class="sh07jntld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunset-1-duo"} {...others} />);
}

export default Component;

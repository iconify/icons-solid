import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fxtjowbmc.css';
import '../../css/a/a9a5abcwb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect transform="rotate(45 40 12)" class="fxtjowbmc"/><rect transform="rotate(45 40 26)" class="a9a5abcwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:diamond-1"} {...others} />);
}

export default Component;

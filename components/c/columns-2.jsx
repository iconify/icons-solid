import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/b/bmws_1bba.css';
import '../../css/b/bc020x-_d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><rect class="bmws_1bba"/><rect class="bc020x-_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:columns-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7mn_xgnv.css';
import '../../css/v/v2yyhhawr.css';
import '../../css/y/yjsg9j51b.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="h7mn_xgnv"><path class="v2yyhhawr"/><path class="yjsg9j51b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:male-outline"} {...others} />);
}

export default Component;

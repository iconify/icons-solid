import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cmql4cbof.css';
import '../../css/y/y2c2wfjhs.css';
import '../../css/n/niwa7c92f.css';
import '../../css/m/m8w2gjabi.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cmql4cbof"/><path class="y2c2wfjhs"/><path class="niwa7c92f"/><path class="m8w2gjabi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-back-outline"} {...others} />);
}

export default Component;

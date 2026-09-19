import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i65b-zb5p.css';
import '../../css/c/c94wgvbbu.css';
import '../../css/i/icvgb0jgu.css';
import '../../css/h/hb6grdbys.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i65b-zb5p"/><path class="c94wgvbbu"/><path class="icvgb0jgu"/><path class="hb6grdbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:adjust-1-outline"} {...others} />);
}

export default Component;

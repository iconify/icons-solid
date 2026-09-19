import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kml1eewvt.css';
import '../../css/g/gbvfgr_zm.css';
import '../../css/p/pjwppjbhu.css';
import '../../css/s/sjq61vbaj.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kml1eewvt"/><path class="gbvfgr_zm"/><path class="pjwppjbhu"/><path class="sjq61vbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ruler-trinangle-outline"} {...others} />);
}

export default Component;

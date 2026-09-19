import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o_-d6f-tc.css';
import '../../css/n/nx05ijkma.css';
import '../../css/h/hmbv5jbil.css';
import '../../css/x/xjsinqbmw.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o_-d6f-tc"/><path class="nx05ijkma"/><path class="hmbv5jbil"/><path class="xjsinqbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:briefcase-medical-outline"} {...others} />);
}

export default Component;

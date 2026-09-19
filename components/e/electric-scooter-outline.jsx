import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uu-ccsewz.css';
import '../../css/h/h_wfhzbpa.css';
import '../../css/c/ck7jbacvf.css';
import '../../css/c/c-pklybfk.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uu-ccsewz"/><path class="h_wfhzbpa"/><path class="ck7jbacvf"/><path class="c-pklybfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:electric-scooter-outline"} {...others} />);
}

export default Component;

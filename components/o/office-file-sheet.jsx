import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hq_oxnbzu.css';
import '../../css/e/e_aw4b_ji.css';
import '../../css/b/bmmk3xbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hq_oxnbzu"/><path class="e_aw4b_ji"/><path class="bmmk3xbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-file-sheet"} {...others} />);
}

export default Component;

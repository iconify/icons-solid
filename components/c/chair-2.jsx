import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ueyw_vbtu.css';
import '../../css/n/n35sledon.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ueyw_vbtu"/><path class="n35sledon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:chair-2"} {...others} />);
}

export default Component;

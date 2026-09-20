import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vfof6mijv.css';
import '../../css/i/iluh_0bjw.css';
import '../../css/k/kqa94_bcj.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vfof6mijv"/><path class="iluh_0bjw"/><path class="kqa94_bcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sword-shield"} {...others} />);
}

export default Component;

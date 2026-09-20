import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/phnqa-sct.css';
import '../../css/i/i_gzth2hn.css';
import '../../css/y/ym1i86buz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="phnqa-sct"/><path class="i_gzth2hn"/><path class="ym1i86buz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:donation-charity-donate-bag-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8y3_li4u.css';
import '../../css/i/isgk1cbzs.css';
import '../../css/v/v0pxqrbkc.css';
import '../../css/c/cecu30bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z8y3_li4u"/><path class="isgk1cbzs"/><path class="v0pxqrbkc"/><path class="cecu30bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-desk"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa9kytbhl.css';
import '../../css/y/yzj6rlcfm.css';
import '../../css/m/mq4vbvbcj.css';
import '../../css/n/n2nnwldzh.css';
import '../../css/z/zp98dkbih.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fa9kytbhl"/><path class="yzj6rlcfm"/><path class="mq4vbvbcj"/><path class="n2nnwldzh"/><path class="zp98dkbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:politics-vote-2"} {...others} />);
}

export default Component;

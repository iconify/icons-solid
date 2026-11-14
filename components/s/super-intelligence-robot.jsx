import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z5k96pceq.css';
import '../../css/f/fjjl66bjn.css';
import '../../css/s/so3841bbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z5k96pceq"/><path class="fjjl66bjn"/><path class="so3841bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-robot"} {...others} />);
}

export default Component;

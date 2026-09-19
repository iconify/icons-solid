import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbr48rber.css';
import '../../css/n/neglx700n.css';
import '../../css/r/raaz8qbsm.css';
import '../../css/v/vueepbcbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zbr48rber"/><path class="neglx700n"/><path class="raaz8qbsm"/><path class="vueepbcbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:volume-binding-outlined"} {...others} />);
}

export default Component;

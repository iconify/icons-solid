import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw4_v6bmk.css';
import '../../css/n/ntfhc6rnl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pw4_v6bmk"/><path class="ntfhc6rnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:function-argument-rtl"} {...others} />);
}

export default Component;

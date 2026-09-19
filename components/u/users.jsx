import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aemyv_bct.css';
import '../../css/y/yma8que2u.css';
import '../../css/o/oi7oksbqj.css';
import '../../css/k/ky-4twbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aemyv_bct"/><circle class="yma8que2u"/><path class="oi7oksbqj"/><path class="ky-4twbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:users"} {...others} />);
}

export default Component;

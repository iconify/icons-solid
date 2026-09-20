import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzo4-zvud.css';
import '../../css/l/l9qwqibqt.css';
import '../../css/t/t62queb9q.css';
import '../../css/t/txm16xbzp.css';
import '../../css/x/x0xrrrbgm.css';
import '../../css/x/x1e_6_58s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fzo4-zvud"/><path class="l9qwqibqt"/><path class="t62queb9q"/><path class="txm16xbzp"/><path class="x0xrrrbgm"/><path class="x1e_6_58s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:degoog"} {...others} />);
}

export default Component;

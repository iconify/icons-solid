import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un65ooazk.css';
import '../../css/w/wlb9i1ctt.css';
import '../../css/k/kpzxgnq_j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="un65ooazk"/><path class="wlb9i1ctt"/><path class="kpzxgnq_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:unimus-light"} {...others} />);
}

export default Component;

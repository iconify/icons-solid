import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgrlpfb5w.css';
import '../../css/n/nm7yi4b_v.css';
import '../../css/n/npaoi6s8i.css';
import '../../css/e/ezv6ukqwd.css';
import '../../css/f/fi82jxbht.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="xgrlpfb5w"/><circle class="nm7yi4b_v"/><path class="npaoi6s8i"/><circle class="ezv6ukqwd"/><path class="fi82jxbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:git-merge-outline"} {...others} />);
}

export default Component;

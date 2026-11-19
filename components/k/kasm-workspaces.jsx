import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_brs7b8y.css';
import '../../css/k/kp9boybhz.css';
import '../../css/k/kkq-gbbrk.css';
import '../../css/n/n4g147c-z.css';
import '../../css/x/x58ehmgkv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l_brs7b8y"/><path class="kp9boybhz"/><path class="kkq-gbbrk"/><path class="n4g147c-z"/><path class="x58ehmgkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kasm-workspaces"} {...others} />);
}

export default Component;

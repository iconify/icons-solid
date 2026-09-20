import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k9xh61zxx.css';
import '../../css/i/iw1-7acct.css';
import '../../css/r/rlg0xc9-z.css';
import '../../css/w/wxio15bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k9xh61zxx"/><path class="iw1-7acct"/><path class="rlg0xc9-z"/><path class="wxio15bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earpods-ear"} {...others} />);
}

export default Component;

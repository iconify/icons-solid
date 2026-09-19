import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugxnffayd.css';
import '../../css/k/k7iordhaa.css';
import '../../css/w/wytvb7b8k.css';
import '../../css/j/jmcf7tb5i.css';
import '../../css/t/tevqq6bvl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ugxnffayd"/><path class="k7iordhaa"/><path class="wytvb7b8k"/><path class="jmcf7tb5i"/><path class="tevqq6bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:oden"} {...others} />);
}

export default Component;

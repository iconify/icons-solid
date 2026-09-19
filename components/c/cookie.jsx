import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuvkzcqcw.css';
import '../../css/k/kff1o6b-x.css';
import '../../css/l/li14_gw7p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zuvkzcqcw"/><path class="kff1o6b-x"/><path class="li14_gw7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cookie"} {...others} />);
}

export default Component;

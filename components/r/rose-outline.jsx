import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgl5x5s_q.css';
import '../../css/x/xa0d2nb-v.css';
import '../../css/v/ve76htc7s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vgl5x5s_q"/><path class="xa0d2nb-v"/><path class="ve76htc7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:rose-outline"} {...others} />);
}

export default Component;

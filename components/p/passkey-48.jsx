import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdivbnogq.css';
import '../../css/j/jeeixzboo.css';
import '../../css/q/qwzw8ri_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdivbnogq"/><path class="jeeixzboo"/><path class="qwzw8ri_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:passkey-48"} {...others} />);
}

export default Component;

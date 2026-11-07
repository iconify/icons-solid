import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt5rq6mfd.css';
import '../../css/r/rce5qmo1y.css';
import '../../css/k/kyu7tx1-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vt5rq6mfd"/><path class="rce5qmo1y"/><path class="kyu7tx1-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-bag-bold-duotone"} {...others} />);
}

export default Component;

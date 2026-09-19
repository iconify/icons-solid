import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onyqr8g1f.css';
import '../../css/a/a5ljf0bmb.css';
import '../../css/h/hcj7zv6_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onyqr8g1f"/><path class="a5ljf0bmb"/><path class="hcj7zv6_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bg-1x1"} {...others} />);
}

export default Component;

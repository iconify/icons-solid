import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n702l_a5q.css';

const viewBox = {"width":1229,"height":677};
const content = `<path class="n702l_a5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:tabezou"} {...others} />);
}

export default Component;

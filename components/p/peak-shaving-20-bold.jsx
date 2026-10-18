import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfkzhrk7n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qfkzhrk7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peak-shaving-20-bold"} {...others} />);
}

export default Component;

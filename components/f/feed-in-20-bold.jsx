import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp6stzr0z.css';
import '../../css/r/r8mpjxb7m.css';
import '../../css/l/ltpo7s9_n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dp6stzr0z"/><path class="r8mpjxb7m"/><path class="ltpo7s9_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feed-in-20-bold"} {...others} />);
}

export default Component;

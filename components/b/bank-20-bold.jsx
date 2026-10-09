import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrqzf1bpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lrqzf1bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bank-20-bold"} {...others} />);
}

export default Component;

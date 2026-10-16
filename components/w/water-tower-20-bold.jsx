import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvj-7zctj.css';
import '../../css/q/qn7t179un.css';
import '../../css/k/k-26e659n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hvj-7zctj"/><path class="qn7t179un"/><path class="k-26e659n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-tower-20-bold"} {...others} />);
}

export default Component;

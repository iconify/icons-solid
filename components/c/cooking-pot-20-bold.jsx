import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-a_50ber.css';
import '../../css/r/r5y-twbvw.css';
import '../../css/e/e8e0uwbbo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k-a_50ber"/><path class="r5y-twbvw"/><path class="e8e0uwbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooking-pot-20-bold"} {...others} />);
}

export default Component;

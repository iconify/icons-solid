import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-v249b3a.css';
import '../../css/u/uljwuewwu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k-v249b3a"/><path class="uljwuewwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rocket-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5f709d9b.css';
import '../../css/g/gapv30tqn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k5f709d9b"/><path class="gapv30tqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltmeter-20-bold"} {...others} />);
}

export default Component;

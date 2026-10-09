import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljpp4jbkd.css';
import '../../css/j/jmkpn4wvl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ljpp4jbkd"/><path class="jmkpn4wvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-flare-20"} {...others} />);
}

export default Component;

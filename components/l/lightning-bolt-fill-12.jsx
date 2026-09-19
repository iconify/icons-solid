import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nic15ybst.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="nic15ybst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lightning-bolt-fill-12"} {...others} />);
}

export default Component;

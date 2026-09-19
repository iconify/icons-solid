import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwq2k-b2y.css';

const viewBox = {"width":1408,"height":1472};
const content = `<path class="rwq2k-b2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:user-waiter"} {...others} />);
}

export default Component;

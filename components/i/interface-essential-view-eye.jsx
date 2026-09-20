import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5t413bgn.css';
import '../../css/o/oktelfbts.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w5t413bgn"/><path class="oktelfbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-view-eye"} {...others} />);
}

export default Component;

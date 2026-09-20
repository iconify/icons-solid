import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owsm1-kve.css';
import '../../css/j/j-exd4cnk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="owsm1-kve"/><path class="j-exd4cnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-performance-money-decrease"} {...others} />);
}

export default Component;

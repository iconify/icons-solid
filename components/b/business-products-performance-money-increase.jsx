import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owsm1-kve.css';
import '../../css/b/b1rupy8li.css';
import '../../css/y/ybmkcumuv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="owsm1-kve"/><path class="b1rupy8li"/><path class="ybmkcumuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-performance-money-increase"} {...others} />);
}

export default Component;

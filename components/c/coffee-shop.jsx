import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgzl3pbub.css';
import '../../css/y/yixh8cciz.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="dgzl3pbub"/><path class="yixh8cciz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:coffee-shop"} {...others} />);
}

export default Component;

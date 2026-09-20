import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh8oi_0yl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nh8oi_0yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:flag-alt"} {...others} />);
}

export default Component;

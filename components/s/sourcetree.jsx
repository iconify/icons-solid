import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hctv6-d5y.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="hctv6-d5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:sourcetree"} {...others} />);
}

export default Component;

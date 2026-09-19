import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc1s4iqke.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yc1s4iqke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:headphones-simple"} {...others} />);
}

export default Component;

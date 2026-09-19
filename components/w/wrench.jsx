import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shmi-5huw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="shmi-5huw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:wrench"} {...others} />);
}

export default Component;

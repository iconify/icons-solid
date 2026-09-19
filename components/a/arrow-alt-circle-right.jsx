import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuq6-10mn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wuq6-10mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:arrow-alt-circle-right"} {...others} />);
}

export default Component;

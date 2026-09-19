import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxvq7acur.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wxvq7acur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:gauge-simple-high"} {...others} />);
}

export default Component;

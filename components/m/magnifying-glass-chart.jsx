import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf6m7r4pu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jf6m7r4pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:magnifying-glass-chart"} {...others} />);
}

export default Component;

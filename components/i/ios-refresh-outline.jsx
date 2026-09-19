import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg2pl9wsr.css';
import '../../css/i/itc5zdbai.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vg2pl9wsr"/><path class="itc5zdbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-refresh-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwfth1zvb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bwfth1zvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-home-3-home-house-map-roof"} {...others} />);
}

export default Component;

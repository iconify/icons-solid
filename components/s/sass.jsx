import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snr1ktbee.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="snr1ktbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sass"} {...others} />);
}

export default Component;

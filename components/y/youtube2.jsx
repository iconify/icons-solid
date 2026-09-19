import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrihrpbok.css';
import '../../css/q/qrptghg4z.css';

const viewBox = {"width":40,"height":16};
const content = `<path class="vrihrpbok"/><path class="qrptghg4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:youtube2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5l0wgc-b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h5l0wgc-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:usb-plug"} {...others} />);
}

export default Component;

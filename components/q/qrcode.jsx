import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_a55lb8v.css';

const viewBox = {"width":1408,"height":1408};
const content = `<path class="z_a55lb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:qrcode"} {...others} />);
}

export default Component;

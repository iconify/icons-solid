import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_qrfpb2i.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="i_qrfpb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:truck-pickup"} {...others} />);
}

export default Component;

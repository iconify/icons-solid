import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp803d-2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kp803d-2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:loyalty-card-barcode-filled"} {...others} />);
}

export default Component;

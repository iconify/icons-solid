import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eijcr9bgh.css';
import '../../css/h/h_qr04una.css';
import '../../css/f/ffwokxblk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eijcr9bgh"/><path class="h_qr04una"/><path class="ffwokxblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:scooter-fast-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmqp0_b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mmqp0_b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-prime-video-logo-1-block"} {...others} />);
}

export default Component;

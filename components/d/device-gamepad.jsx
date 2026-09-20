import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/optm_q_ia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="optm_q_ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-gamepad"} {...others} />);
}

export default Component;

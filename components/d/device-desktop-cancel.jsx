import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4l_q6qfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4l_q6qfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-desktop-cancel"} {...others} />);
}

export default Component;

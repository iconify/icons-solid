import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqi5v1bhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqi5v1bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hospital-circle-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nln9_m3-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nln9_m3-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:guitar-pick-filled"} {...others} />);
}

export default Component;

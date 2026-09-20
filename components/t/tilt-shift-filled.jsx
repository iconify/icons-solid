import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmw6fyb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmw6fyb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tilt-shift-filled"} {...others} />);
}

export default Component;

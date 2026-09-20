import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0qpvg3uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0qpvg3uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-speaker-filled"} {...others} />);
}

export default Component;

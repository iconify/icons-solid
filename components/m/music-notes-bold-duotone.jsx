import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-i4kgtbw.css';
import '../../css/t/tsgsm7xry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-i4kgtbw"/><path class="tsgsm7xry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-notes-bold-duotone"} {...others} />);
}

export default Component;

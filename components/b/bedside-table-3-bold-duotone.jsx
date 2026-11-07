import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je1sviibk.css';
import '../../css/l/lj99_bbii.css';
import '../../css/e/e4t4l5b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="je1sviibk"/><path class="lj99_bbii"/><path class="e4t4l5b9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-3-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riv2d9n9z.css';
import '../../css/j/j10j52bca.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="riv2d9n9z"/><path class="j10j52bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-off-outline"} {...others} />);
}

export default Component;

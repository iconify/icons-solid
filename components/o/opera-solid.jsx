import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw82a8b6o.css';
import '../../css/u/u048i3bwl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fw82a8b6o"/><path class="u048i3bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:opera-solid"} {...others} />);
}

export default Component;

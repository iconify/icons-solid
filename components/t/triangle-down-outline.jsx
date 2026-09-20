import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7m5x004v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n7m5x004v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:triangle-down-outline"} {...others} />);
}

export default Component;

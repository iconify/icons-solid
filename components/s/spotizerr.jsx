import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-89ydlgz.css';
import '../../css/v/vvinubbym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e-89ydlgz"/><path class="vvinubbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spotizerr"} {...others} />);
}

export default Component;

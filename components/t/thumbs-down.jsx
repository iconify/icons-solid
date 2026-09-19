import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwe5dkr3d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fwe5dkr3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:thumbs-down"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl0hn4bds.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pl0hn4bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:utensil-spoon"} {...others} />);
}

export default Component;

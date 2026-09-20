import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1hvo3b0r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p1hvo3b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-arrows-up-down"} {...others} />);
}

export default Component;

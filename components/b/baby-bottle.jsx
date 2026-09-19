import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1zlqhbif.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y1zlqhbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:baby-bottle"} {...others} />);
}

export default Component;

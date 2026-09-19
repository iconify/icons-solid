import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0ko1jb1z.css';

const viewBox = {"width":368,"height":480};
const content = `<path class="o0ko1jb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:tap-and-play"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj4o9achs.css';

const viewBox = {"width":279.62,"height":279.9};
const content = `<path class="vj4o9achs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:fpt-play"} {...others} />);
}

export default Component;

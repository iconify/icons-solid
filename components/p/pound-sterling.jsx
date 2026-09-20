import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcsgc4brl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcsgc4brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pound-sterling"} {...others} />);
}

export default Component;

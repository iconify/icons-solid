import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4gg6fwiv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j4gg6fwiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:foursquare"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e079j9kul.css';

const viewBox = {"width":1216,"height":1664};
const content = `<path class="e079j9kul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:foursquare"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz0j6tbqr.css';

const viewBox = {"width":1024,"height":961};
const content = `<path class="iz0j6tbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:foursquare"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js_8mh9rd.css';

const viewBox = {"width":1025,"height":768};
const content = `<path class="js_8mh9rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:tabletscreensize"} {...others} />);
}

export default Component;

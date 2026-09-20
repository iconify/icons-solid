import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzmq702cr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzmq702cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:thumbsup-24"} {...others} />);
}

export default Component;

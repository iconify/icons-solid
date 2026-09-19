import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofy1pmhsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofy1pmhsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:facebook"} {...others} />);
}

export default Component;

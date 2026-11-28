import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmvr5l_be.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmvr5l_be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:dollar"} {...others} />);
}

export default Component;

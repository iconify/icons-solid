import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5zi9c24n.css';
import '../../css/j/ji_uifbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5zi9c24n"/><path class="ji_uifbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:location-on"} {...others} />);
}

export default Component;

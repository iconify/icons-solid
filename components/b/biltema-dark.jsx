import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo4ycbbbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oo4ycbbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:biltema-dark"} {...others} />);
}

export default Component;

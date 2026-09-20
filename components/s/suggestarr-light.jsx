import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-3_x9pzb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-3_x9pzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:suggestarr-light"} {...others} />);
}

export default Component;

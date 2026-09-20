import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ompyz3pxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ompyz3pxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:instructure-canvas"} {...others} />);
}

export default Component;

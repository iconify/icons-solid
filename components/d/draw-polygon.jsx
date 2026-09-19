import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhwy3sbru.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="yhwy3sbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:draw-polygon"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nylo2vbor.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nylo2vbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haproxy-dark"} {...others} />);
}

export default Component;

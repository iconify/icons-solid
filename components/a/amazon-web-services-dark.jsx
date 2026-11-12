import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj4hvkb4c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yj4hvkb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amazon-web-services-dark"} {...others} />);
}

export default Component;

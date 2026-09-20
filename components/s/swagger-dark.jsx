import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv2bqz5ub.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yv2bqz5ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swagger-dark"} {...others} />);
}

export default Component;

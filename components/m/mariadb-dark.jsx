import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg38qu8cl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eg38qu8cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mariadb-dark"} {...others} />);
}

export default Component;

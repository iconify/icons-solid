import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u37d7hbgy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u37d7hbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:personal-management-system-light"} {...others} />);
}

export default Component;

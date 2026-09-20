import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz5kt1b4o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yz5kt1b4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:deepseek-dark"} {...others} />);
}

export default Component;

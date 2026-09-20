import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_m9zcc1m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d_m9zcc1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinterest-dark"} {...others} />);
}

export default Component;

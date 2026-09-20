import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltn65fiok.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ltn65fiok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:usertour-dark"} {...others} />);
}

export default Component;

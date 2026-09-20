import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la7tnabna.css';
import '../../css/w/w7blx8bjm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="la7tnabna"/><path class="w7blx8bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:initiative-project-management-dark"} {...others} />);
}

export default Component;

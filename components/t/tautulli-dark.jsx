import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3yxxqa6u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w3yxxqa6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tautulli-dark"} {...others} />);
}

export default Component;

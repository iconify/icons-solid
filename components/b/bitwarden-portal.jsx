import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2dsus3eh.css';
import '../../css/m/mh2gjorsd.css';
import '../../css/h/h7vs4zvyg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e2dsus3eh"/><path class="mh2gjorsd"/><path class="h7vs4zvyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bitwarden-portal"} {...others} />);
}

export default Component;

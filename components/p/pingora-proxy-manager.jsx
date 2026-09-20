import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czfhl0lnw.css';
import '../../css/f/f4wrckbty.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="czfhl0lnw"/><path class="f4wrckbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pingora-proxy-manager"} {...others} />);
}

export default Component;

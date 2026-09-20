import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrflbhmmb.css';
import '../../css/h/h3j1xetuj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xrflbhmmb"/><circle class="h3j1xetuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:livinity-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjg59kbok.css';
import '../../css/k/kdlzsghls.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kjg59kbok"/><path class="kdlzsghls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oauth2-proxy-light"} {...others} />);
}

export default Component;

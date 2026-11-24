import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq7-tmb6k.css';
import '../../css/t/tofm4bbmh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hq7-tmb6k"/><rect class="tofm4bbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:besucherlogin-light"} {...others} />);
}

export default Component;

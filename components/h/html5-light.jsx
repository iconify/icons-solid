import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smn7yqb_q.css';
import '../../css/e/eyfgxacfm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="smn7yqb_q"/><path class="eyfgxacfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:html5-light"} {...others} />);
}

export default Component;

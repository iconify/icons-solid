import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxhh4rbta.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cxhh4rbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:duckdns-dark"} {...others} />);
}

export default Component;

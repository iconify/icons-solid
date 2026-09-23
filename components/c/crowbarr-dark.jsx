import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqqafpd3i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wqqafpd3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crowbarr-dark"} {...others} />);
}

export default Component;

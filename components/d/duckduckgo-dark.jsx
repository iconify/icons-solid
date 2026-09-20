import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaa_36bkr.css';
import '../../css/x/xa8hyu6ct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zaa_36bkr"/><path class="xa8hyu6ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:duckduckgo-dark"} {...others} />);
}

export default Component;

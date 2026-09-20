import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l30pv5y8m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l30pv5y8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:join-corner-arrow-4"} {...others} />);
}

export default Component;

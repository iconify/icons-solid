import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xus3r2plp.css';
import '../../css/o/orv7ykb9w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xus3r2plp"/><path class="orv7ykb9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:threadfin-light"} {...others} />);
}

export default Component;

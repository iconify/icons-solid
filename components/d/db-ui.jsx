import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qksq_ubpp.css';
import '../../css/s/sxrvdehej.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qksq_ubpp"/><path class="sxrvdehej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:db-ui"} {...others} />);
}

export default Component;

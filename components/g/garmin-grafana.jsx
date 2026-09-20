import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqiziocuh.css';
import '../../css/e/e9p8wp9jq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xqiziocuh"/><path class="e9p8wp9jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:garmin-grafana"} {...others} />);
}

export default Component;

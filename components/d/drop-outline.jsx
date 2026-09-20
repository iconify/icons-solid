import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqm-8rbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rqm-8rbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:drop-outline"} {...others} />);
}

export default Component;

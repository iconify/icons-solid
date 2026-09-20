import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stf__337k.css';
import '../../css/y/yjte_gbqh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="stf__337k"/><path class="yjte_gbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:log-16"} {...others} />);
}

export default Component;

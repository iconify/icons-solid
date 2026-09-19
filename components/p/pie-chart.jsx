import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlepf_eml.css';
import '../../css/q/qbsvsyi4h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nlepf_eml"/><path class="qbsvsyi4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:pie-chart"} {...others} />);
}

export default Component;

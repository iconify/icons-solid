import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymn_1dbbh.css';
import '../../css/n/ndusirsyt.css';
import '../../css/r/r_v2nxmlq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ymn_1dbbh"/><path class="ndusirsyt"/><path class="r_v2nxmlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-flow-48-bold"} {...others} />);
}

export default Component;

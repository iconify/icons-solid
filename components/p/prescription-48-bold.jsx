import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_pz3rxhk.css';
import '../../css/x/xgxu7gbrz.css';
import '../../css/o/o0njx073q.css';
import '../../css/d/d3ex0zbdm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_pz3rxhk"/><path class="xgxu7gbrz"/><path class="o0njx073q"/><path class="d3ex0zbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prescription-48-bold"} {...others} />);
}

export default Component;

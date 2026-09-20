import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxrp8fbwb.css';
import '../../css/s/sp9j6lqmm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yxrp8fbwb"/><path class="sp9j6lqmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:globe-15"} {...others} />);
}

export default Component;

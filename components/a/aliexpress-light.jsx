import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbhmpbcfb.css';
import '../../css/e/el-oljoyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dbhmpbcfb"/><path class="el-oljoyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aliexpress-light"} {...others} />);
}

export default Component;

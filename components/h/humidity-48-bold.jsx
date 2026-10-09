import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpqifubxl.css';
import '../../css/b/bscrhu_dt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dpqifubxl"/><path class="bscrhu_dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidity-48-bold"} {...others} />);
}

export default Component;

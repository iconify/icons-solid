import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh809gb4r.css';
import '../../css/p/pahc4sbmv.css';
import '../../css/y/yvkfxeizw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zh809gb4r"/><path class="pahc4sbmv"/><path class="yvkfxeizw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-48-bold"} {...others} />);
}

export default Component;

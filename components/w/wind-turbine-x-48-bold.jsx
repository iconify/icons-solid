import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0gei6bou.css';
import '../../css/x/xwlwi5bcz.css';
import '../../css/c/cg2mevbgr.css';
import '../../css/x/x4z9uobeb.css';
import '../../css/c/c4tbdll5w.css';
import '../../css/z/zs372kprb.css';
import '../../css/o/oqrsy3bng.css';
import '../../css/r/rixo0v9ei.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f0gei6bou"/><path class="xwlwi5bcz"/><path class="cg2mevbgr"/><path class="x4z9uobeb"/><path class="c4tbdll5w"/><path class="zs372kprb"/><path class="oqrsy3bng"/><path class="rixo0v9ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-x-48-bold"} {...others} />);
}

export default Component;

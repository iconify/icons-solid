import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0377flqh.css';
import '../../css/m/mc3iqybwb.css';
import '../../css/z/zxfgagwie.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a0377flqh"/><path class="mc3iqybwb"/><path class="zxfgagwie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pumped-hydro-48"} {...others} />);
}

export default Component;

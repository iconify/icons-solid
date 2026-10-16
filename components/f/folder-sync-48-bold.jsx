import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrw5zccqv.css';
import '../../css/f/fuf51j_ed.css';
import '../../css/x/x0tickbse.css';
import '../../css/r/rod6sdbcj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vrw5zccqv"/><path class="fuf51j_ed"/><path class="x0tickbse"/><path class="rod6sdbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-sync-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpel3hezc.css';
import '../../css/b/b5o99dp3a.css';
import '../../css/g/g0_zv0bau.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpel3hezc"/><path class="b5o99dp3a"/><path class="g0_zv0bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-histogram-48-bold"} {...others} />);
}

export default Component;

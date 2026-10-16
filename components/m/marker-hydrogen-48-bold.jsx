import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/x/xhv_gy3an.css';
import '../../css/m/m1__untbz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="xhv_gy3an"/><path class="m1__untbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-hydrogen-48-bold"} {...others} />);
}

export default Component;

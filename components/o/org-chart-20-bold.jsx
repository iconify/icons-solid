import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qclimqb5u.css';
import '../../css/a/amrwb6zhd.css';
import '../../css/q/qy-1mwbkm.css';
import '../../css/x/xk-igwbmu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qclimqb5u"/><path class="amrwb6zhd"/><path class="qy-1mwbkm"/><path class="xk-igwbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:org-chart-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkw_aib9x.css';
import '../../css/o/onixhkbxr.css';
import '../../css/u/umdfmcbpo.css';
import '../../css/a/a00b_rbme.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pkw_aib9x"/><path class="onixhkbxr"/><path class="umdfmcbpo"/><path class="a00b_rbme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:town-hall-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8mp0wbzm.css';
import '../../css/r/r1wj_pscx.css';
import '../../css/t/t8srk-ced.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m8mp0wbzm"/><path class="r1wj_pscx"/><path class="t8srk-ced"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-storage-48"} {...others} />);
}

export default Component;

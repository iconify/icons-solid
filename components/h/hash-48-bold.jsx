import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbl-5-buj.css';
import '../../css/v/v101e1bjz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tbl-5-buj"/><path class="v101e1bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hash-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0w4ecbke.css';
import '../../css/k/kq03vfbxs.css';
import '../../css/t/tnm_2jb5y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h0w4ecbke"/><path class="kq03vfbxs"/><path class="tnm_2jb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sleet-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlsjaz2ur.css';
import '../../css/m/mp2bmtb4q.css';
import '../../css/h/hfhgd-2kf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jlsjaz2ur"/><path class="mp2bmtb4q"/><path class="hfhgd-2kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cell-48-bold"} {...others} />);
}

export default Component;

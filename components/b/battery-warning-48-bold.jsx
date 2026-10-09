import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weah0ec9g.css';
import '../../css/d/d29jj3bil.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="weah0ec9g"/><path class="d29jj3bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-warning-48-bold"} {...others} />);
}

export default Component;

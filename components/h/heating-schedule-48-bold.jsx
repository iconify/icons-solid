import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv_yx13wf.css';
import '../../css/h/hh9nw1bkm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xv_yx13wf"/><path class="hh9nw1bkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-schedule-48-bold"} {...others} />);
}

export default Component;

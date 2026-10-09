import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5nrbcb_x.css';
import '../../css/p/px1uvz_dr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s5nrbcb_x"/><path class="px1uvz_dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dispatch-48-bold"} {...others} />);
}

export default Component;

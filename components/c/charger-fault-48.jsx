import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnljhyiuk.css';
import '../../css/w/wxymvdbcb.css';
import '../../css/e/eeqb4o0lv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fnljhyiuk"/><path class="wxymvdbcb"/><path class="eeqb4o0lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fault-48"} {...others} />);
}

export default Component;

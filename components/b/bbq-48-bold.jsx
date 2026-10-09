import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw-t5bcty.css';
import '../../css/d/dqolik5wq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xw-t5bcty"/><path class="dqolik5wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bbq-48-bold"} {...others} />);
}

export default Component;

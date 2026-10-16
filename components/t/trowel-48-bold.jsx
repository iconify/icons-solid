import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_9sgybsj.css';
import '../../css/s/sd1bnsbfx.css';
import '../../css/t/teddm1b8l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s_9sgybsj"/><path class="sd1bnsbfx"/><path class="teddm1b8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trowel-48-bold"} {...others} />);
}

export default Component;

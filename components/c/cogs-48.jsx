import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxk-14-gk.css';
import '../../css/r/r58q_lbbh.css';
import '../../css/f/fn2c-okpf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fxk-14-gk"/><path class="r58q_lbbh"/><path class="fn2c-okpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cogs-48"} {...others} />);
}

export default Component;

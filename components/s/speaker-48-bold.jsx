import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b10s5pbto.css';
import '../../css/j/japh7m8wk.css';
import '../../css/w/w1l08d2zj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b10s5pbto"/><path class="japh7m8wk"/><path class="w1l08d2zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-48-bold"} {...others} />);
}

export default Component;

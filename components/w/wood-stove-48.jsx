import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm_t_jblc.css';
import '../../css/j/jztm0fbrx.css';
import '../../css/t/tbrtq8bna.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lm_t_jblc"/><path class="jztm0fbrx"/><path class="tbrtq8bna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-stove-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnjcr8b9t.css';
import '../../css/v/v8g6tabng.css';
import '../../css/j/jjjiu_baa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cnjcr8b9t"/><path class="v8g6tabng"/><path class="jjjiu_baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circuit-breaker-48-bold"} {...others} />);
}

export default Component;

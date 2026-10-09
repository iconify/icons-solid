import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh9opkozm.css';
import '../../css/d/dc1ph1bfg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jh9opkozm"/><path class="dc1ph1bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-vertical-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewglqtbfj.css';
import '../../css/y/y882hsbhy.css';
import '../../css/e/eosacgbuh.css';
import '../../css/h/hfuybw6aj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ewglqtbfj"/><path class="y882hsbhy"/><path class="eosacgbuh"/><path class="hfuybw6aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:broom-48-bold"} {...others} />);
}

export default Component;

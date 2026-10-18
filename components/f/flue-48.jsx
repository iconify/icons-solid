import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghoh098lm.css';
import '../../css/n/nyhx7fbbv.css';
import '../../css/z/zxrbw5bpz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghoh098lm"/><path class="nyhx7fbbv"/><path class="zxrbw5bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flue-48"} {...others} />);
}

export default Component;

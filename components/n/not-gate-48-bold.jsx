import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i04mbuhvn.css';
import '../../css/h/hf4ii3vwy.css';
import '../../css/j/j00bos-ah.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i04mbuhvn"/><path class="hf4ii3vwy"/><path class="j00bos-ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:not-gate-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlpz3ljgc.css';
import '../../css/x/xp0bkxb5p.css';
import '../../css/b/bwm_8acuc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xlpz3ljgc"/><path class="xp0bkxb5p"/><path class="bwm_8acuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flue-20-bold"} {...others} />);
}

export default Component;

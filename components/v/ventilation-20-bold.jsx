import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coivkzecr.css';
import '../../css/p/p8-ltwbll.css';
import '../../css/y/yzgpzhz2h.css';
import '../../css/e/en2-8kltz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="coivkzecr"/><path class="p8-ltwbll"/><path class="yzgpzhz2h"/><path class="en2-8kltz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ventilation-20-bold"} {...others} />);
}

export default Component;

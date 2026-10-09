import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coivkzecr.css';
import '../../css/e/ed9sx_fzr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="coivkzecr"/><path class="ed9sx_fzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-bolt-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce0cywmuu.css';
import '../../css/p/pf7rljwtp.css';
import '../../css/x/xl8x9eggy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ce0cywmuu"/><path class="pf7rljwtp"/><path class="xl8x9eggy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-lock-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckj36vb5o.css';
import '../../css/t/tmqztg9xx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ckj36vb5o"/><path class="tmqztg9xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scroll-48"} {...others} />);
}

export default Component;

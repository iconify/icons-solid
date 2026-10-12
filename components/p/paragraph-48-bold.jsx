import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4_y_kbip.css';
import '../../css/q/qpe8ekbrc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f4_y_kbip"/><path class="qpe8ekbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paragraph-48-bold"} {...others} />);
}

export default Component;

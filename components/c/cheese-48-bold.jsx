import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4kzwwbha.css';
import '../../css/n/n5_c-mepp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e4kzwwbha"/><path class="n5_c-mepp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cheese-48-bold"} {...others} />);
}

export default Component;

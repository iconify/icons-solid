import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egi8qzduf.css';
import '../../css/t/tly4pwr5p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="egi8qzduf"/><path class="tly4pwr5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-tub-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibdu4nf8k.css';
import '../../css/s/s_4tnnghm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ibdu4nf8k"/><path class="s_4tnnghm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dog-48-bold"} {...others} />);
}

export default Component;

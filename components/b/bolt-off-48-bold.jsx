import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix1bs9bqg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ix1bs9bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-off-48-bold"} {...others} />);
}

export default Component;

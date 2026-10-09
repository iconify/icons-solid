import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqabahbkv.css';
import '../../css/a/awqfydw7r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rqabahbkv"/><path class="awqfydw7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-48-bold"} {...others} />);
}

export default Component;

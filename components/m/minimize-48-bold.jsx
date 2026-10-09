import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7sy_0byc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v7sy_0byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minimize-48-bold"} {...others} />);
}

export default Component;

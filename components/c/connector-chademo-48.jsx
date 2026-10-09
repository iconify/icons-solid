import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg-biwbzh.css';
import '../../css/h/h1lg0z1zs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xg-biwbzh"/><path class="h1lg0z1zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-chademo-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uph6w3b8p.css';
import '../../css/q/qo92-j1px.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uph6w3b8p"/><path class="qo92-j1px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:newspaper-48-bold"} {...others} />);
}

export default Component;

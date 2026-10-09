import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xujk5fdpi.css';
import '../../css/e/e5asi9aud.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xujk5fdpi"/><path class="e5asi9aud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-truck-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuqr6acyi.css';
import '../../css/b/bp937cc8x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iuqr6acyi"/><path class="bp937cc8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-fire-48"} {...others} />);
}

export default Component;

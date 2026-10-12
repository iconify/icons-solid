import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnv8bn3zi.css';
import '../../css/x/xqa9wgbqx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hnv8bn3zi"/><path class="xqa9wgbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:owl-48"} {...others} />);
}

export default Component;

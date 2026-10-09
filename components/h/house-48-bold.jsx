import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfpjugbvy.css';
import '../../css/f/fxb5cccap.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfpjugbvy"/><path class="fxb5cccap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-48-bold"} {...others} />);
}

export default Component;

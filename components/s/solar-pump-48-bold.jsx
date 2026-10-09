import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx48pmbno.css';
import '../../css/j/j6ylgsbjb.css';
import '../../css/j/jtmiwfbps.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yx48pmbno"/><path class="j6ylgsbjb"/><path class="jtmiwfbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-pump-48-bold"} {...others} />);
}

export default Component;

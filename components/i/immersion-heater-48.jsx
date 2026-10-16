import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpapdbc8v.css';
import '../../css/y/yeva_mbnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lpapdbc8v"/><path class="yeva_mbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:immersion-heater-48"} {...others} />);
}

export default Component;

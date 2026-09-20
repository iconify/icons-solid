import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrvfbr9fo.css';
import '../../css/r/r-62_47-w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mrvfbr9fo"/><path class="r-62_47-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openmediavault"} {...others} />);
}

export default Component;

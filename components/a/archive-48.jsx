import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu7_ubb2h.css';
import '../../css/g/g11ocj1zr.css';
import '../../css/x/xf66x87di.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gu7_ubb2h"/><path class="g11ocj1zr"/><path class="xf66x87di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archive-48"} {...others} />);
}

export default Component;

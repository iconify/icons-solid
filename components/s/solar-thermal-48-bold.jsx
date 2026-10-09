import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3in-zb7w.css';
import '../../css/j/jtlfsbcyo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z3in-zb7w"/><path class="jtlfsbcyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-thermal-48-bold"} {...others} />);
}

export default Component;

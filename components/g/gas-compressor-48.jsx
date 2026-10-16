import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbe2gqb6b.css';
import '../../css/f/fn_f7s4pj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbe2gqb6b"/><path class="fn_f7s4pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-compressor-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5c_hurfl.css';
import '../../css/o/oevu3r_8x.css';
import '../../css/k/koo_zccjj.css';
import '../../css/i/ijomgmbue.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i5c_hurfl"/><path class="oevu3r_8x"/><path class="koo_zccjj"/><path class="ijomgmbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:atom-48"} {...others} />);
}

export default Component;

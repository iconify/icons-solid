import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh8gpb9au.css';
import '../../css/f/f_px_ob0l.css';
import '../../css/s/shxbbmbnq.css';
import '../../css/p/ppq8rnbht.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vh8gpb9au"/><path class="f_px_ob0l"/><path class="shxbbmbnq"/><path class="ppq8rnbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:extractor-fan-48-bold"} {...others} />);
}

export default Component;

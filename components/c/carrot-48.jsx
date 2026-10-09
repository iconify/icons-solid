import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2l2_ebga.css';
import '../../css/g/gjxcd2b_y.css';
import '../../css/e/ebxyc5bix.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2l2_ebga"/><path class="gjxcd2b_y"/><path class="ebxyc5bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carrot-48"} {...others} />);
}

export default Component;

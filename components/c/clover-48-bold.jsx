import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fginnxrdt.css';
import '../../css/m/mpfbstbhm.css';
import '../../css/w/wn32g0bsf.css';
import '../../css/d/d4x_2oiju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fginnxrdt"/><path class="mpfbstbhm"/><path class="wn32g0bsf"/><path class="d4x_2oiju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clover-48-bold"} {...others} />);
}

export default Component;

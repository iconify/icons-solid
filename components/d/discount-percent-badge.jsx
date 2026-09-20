import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y78n41bnv.css';
import '../../css/x/xkk34h5my.css';
import '../../css/o/o1gg3kbme.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y78n41bnv"/><path class="xkk34h5my"/><path class="o1gg3kbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:discount-percent-badge"} {...others} />);
}

export default Component;

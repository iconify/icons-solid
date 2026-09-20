import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmtdotb0s.css';
import '../../css/l/lsyzzy5ql.css';
import '../../css/l/l3a7hfkmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mmtdotb0s"/><circle class="lsyzzy5ql"/><path class="l3a7hfkmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-chrome"} {...others} />);
}

export default Component;

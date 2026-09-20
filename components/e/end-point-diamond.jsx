import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwq-wdobf.css';
import '../../css/u/uv4dz2bne.css';
import '../../css/t/t7wdpeb1d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hwq-wdobf"/><path class="uv4dz2bne"/><path class="t7wdpeb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:end-point-diamond"} {...others} />);
}

export default Component;

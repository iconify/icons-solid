import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zogzlnw3b.css';
import '../../css/t/tyrw2cb4b.css';
import '../../css/f/fma2okkxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zogzlnw3b"/><path class="tyrw2cb4b"/><path class="fma2okkxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:umbrella-rain"} {...others} />);
}

export default Component;

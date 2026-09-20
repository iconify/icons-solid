import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkyfoacop.css';
import '../../css/m/mmtbp_6df.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hkyfoacop"/><path class="mmtbp_6df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:necktie"} {...others} />);
}

export default Component;

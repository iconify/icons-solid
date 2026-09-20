import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2n0_2byu.css';
import '../../css/a/akgd25bdz.css';
import '../../css/g/g4o7onk-i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="m2n0_2byu"/><path class="akgd25bdz"/><path class="g4o7onk-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:diamond-1"} {...others} />);
}

export default Component;

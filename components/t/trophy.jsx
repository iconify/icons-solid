import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyjh9-bdj.css';
import '../../css/z/zdc-vqb_y.css';
import '../../css/p/pj95wpiiq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cyjh9-bdj"/><path class="zdc-vqb_y"/><path class="pj95wpiiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:trophy"} {...others} />);
}

export default Component;

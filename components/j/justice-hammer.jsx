import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjx5bbb8f.css';
import '../../css/j/j7sgl10vf.css';
import '../../css/c/cys7v3q4f.css';
import '../../css/b/bmn4wibct.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tjx5bbb8f"/><path class="j7sgl10vf"/><path class="cys7v3q4f"/><path class="bmn4wibct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:justice-hammer"} {...others} />);
}

export default Component;

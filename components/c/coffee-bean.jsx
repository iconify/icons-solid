import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lst6zkbwl.css';
import '../../css/u/u_v1peb6s.css';
import '../../css/b/bhm8m3ucc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lst6zkbwl"/><path class="u_v1peb6s"/><path class="bhm8m3ucc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coffee-bean"} {...others} />);
}

export default Component;

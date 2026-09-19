import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-tqjdofv.css';
import '../../css/m/m2kr2vb1b.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="u-tqjdofv"/><path class="m2kr2vb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-instagram"} {...others} />);
}

export default Component;

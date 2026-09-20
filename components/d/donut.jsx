import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5lto4myw.css';
import '../../css/b/be1091uiv.css';
import '../../css/z/z_jl5dk2k.css';
import '../../css/f/f-mn8yb0c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x5lto4myw"/><path class="be1091uiv"/><path class="z_jl5dk2k"/><path class="f-mn8yb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:donut"} {...others} />);
}

export default Component;

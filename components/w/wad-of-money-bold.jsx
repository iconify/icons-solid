import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1rurhing.css';
import '../../css/s/sg27uob7a.css';
import '../../css/r/r4pbc_b_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h1rurhing"/><path class="sg27uob7a"/><path class="r4pbc_b_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wad-of-money-bold"} {...others} />);
}

export default Component;

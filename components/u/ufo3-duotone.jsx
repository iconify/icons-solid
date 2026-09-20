import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_m-jnb0n.css';
import '../../css/j/jpb9e8bik.css';
import '../../css/v/vg8-b5w0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z_m-jnb0n"/><path class="jpb9e8bik"/><path class="vg8-b5w0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ufo3-duotone"} {...others} />);
}

export default Component;

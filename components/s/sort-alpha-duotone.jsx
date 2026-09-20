import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/te1o1iy7a.css';
import '../../css/f/fewy_veac.css';
import '../../css/g/g9ct16bty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="te1o1iy7a"/><path clip-rule="evenodd" class="fewy_veac"/><path class="g9ct16bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sort-alpha-duotone"} {...others} />);
}

export default Component;

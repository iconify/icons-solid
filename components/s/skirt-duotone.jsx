import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3gpocbqz.css';
import '../../css/b/bfk955bbr.css';
import '../../css/d/dmivivbta.css';
import '../../css/i/icl286b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u3gpocbqz"/><path class="bfk955bbr"/><path class="dmivivbta"/><path class="icl286b5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skirt-duotone"} {...others} />);
}

export default Component;

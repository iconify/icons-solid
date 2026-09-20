import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7vbzuguv.css';
import '../../css/p/p6hck1blo.css';
import '../../css/b/bx67anwvz.css';
import '../../css/b/bvisy3whf.css';
import '../../css/w/w83w87a_a.css';
import '../../css/g/g8x168b0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m7vbzuguv"/><path class="p6hck1blo"/><path class="bx67anwvz"/><path class="bvisy3whf"/><path class="w83w87a_a"/><path class="g8x168b0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-bold-duotone"} {...others} />);
}

export default Component;

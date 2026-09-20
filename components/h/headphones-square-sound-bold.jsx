import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjnwjzb4c.css';
import '../../css/z/zir5_7bld.css';
import '../../css/g/gygffl34c.css';
import '../../css/h/hu5w36xiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cjnwjzb4c"/><path clip-rule="evenodd" class="zir5_7bld"/><path clip-rule="evenodd" class="gygffl34c"/><path clip-rule="evenodd" class="hu5w36xiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-square-sound-bold"} {...others} />);
}

export default Component;

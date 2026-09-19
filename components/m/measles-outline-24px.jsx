import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/giax-8b2r.css';
import '../../css/z/zjedcjb0z.css';
import '../../css/l/l_khb_z8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="giax-8b2r"/><path class="zjedcjb0z"/><path clip-rule="evenodd" class="l_khb_z8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:measles-outline-24px"} {...others} />);
}

export default Component;

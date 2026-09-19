import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f4hm7m_rz.css';
import '../../css/h/heegwbb3r.css';
import '../../css/z/zv8mbzzst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f4hm7m_rz"/><path clip-rule="evenodd" class="heegwbb3r"/><path class="zv8mbzzst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:award-solid"} {...others} />);
}

export default Component;

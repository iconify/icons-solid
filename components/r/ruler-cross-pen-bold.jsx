import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijceuubyb.css';
import '../../css/c/c611n2bdn.css';
import '../../css/m/mv8ixyb5q.css';
import '../../css/m/m_oo3jbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ijceuubyb"/><path class="c611n2bdn"/><path class="mv8ixyb5q"/><path class="m_oo3jbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-cross-pen-bold"} {...others} />);
}

export default Component;

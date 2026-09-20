import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y19tb2bje.css';
import '../../css/g/g_1yj6bdr.css';
import '../../css/b/br87t9bzc.css';

const viewBox = {"width":24,"height":25};
const content = `<g class="ft5dv1b6b"><path class="y19tb2bje"/><path class="g_1yj6bdr"/><path class="br87t9bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-education"} {...others} />);
}

export default Component;

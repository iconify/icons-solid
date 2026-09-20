import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/settnrb1q.css';
import '../../css/g/gwdn4w5ku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="settnrb1q"/><path class="gwdn4w5ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-next-bold"} {...others} />);
}

export default Component;

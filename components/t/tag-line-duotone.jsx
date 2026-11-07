import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2sl48bmy.css';
import '../../css/j/j-efaqytf.css';
import '../../css/c/c80g_xb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a2sl48bmy"/><circle transform="rotate(-45 8.607 8.879)" class="j-efaqytf"/><path class="c80g_xb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-line-duotone"} {...others} />);
}

export default Component;

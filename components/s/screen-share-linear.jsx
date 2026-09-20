import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e71p8bxkf.css';
import '../../css/g/g_eh3ebdg.css';
import '../../css/z/zgwn8jw0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e71p8bxkf"/><path class="g_eh3ebdg"/><path class="zgwn8jw0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screen-share-linear"} {...others} />);
}

export default Component;

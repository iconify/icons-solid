import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evsr84xeg.css';
import '../../css/e/e71p8bxkf.css';
import '../../css/z/zgwn8jw0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="evsr84xeg"/><path class="e71p8bxkf"/><path class="zgwn8jw0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screen-share-line-duotone"} {...others} />);
}

export default Component;

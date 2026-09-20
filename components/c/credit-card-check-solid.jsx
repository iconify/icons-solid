import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epg8ibcng.css';
import '../../css/u/uhro_3l0u.css';
import '../../css/i/iu5wbjbno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="epg8ibcng"/><path class="uhro_3l0u"/><path class="iu5wbjbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:credit-card-check-solid"} {...others} />);
}

export default Component;

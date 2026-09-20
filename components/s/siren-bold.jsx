import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nuyvp_bwc.css';
import '../../css/f/f161wdbbo.css';
import '../../css/f/fi5wyfwwo.css';
import '../../css/n/n8qbuufsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nuyvp_bwc"/><path class="f161wdbbo"/><path class="fi5wyfwwo"/><path class="n8qbuufsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-bold"} {...others} />);
}

export default Component;

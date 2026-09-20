import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u9u89mb-h.css';
import '../../css/m/mk03vobfs.css';
import '../../css/t/tg0c1lbwk.css';
import '../../css/t/tk77rcb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u9u89mb-h"/><path class="mk03vobfs"/><path class="tg0c1lbwk"/><path class="tk77rcb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-top-to-bottom-line-duotone"} {...others} />);
}

export default Component;

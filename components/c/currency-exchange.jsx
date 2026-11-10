import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rlr8j9iso.css';
import '../../css/r/rb6407b-h.css';
import '../../css/w/w7cox2bpa.css';
import '../../css/a/akauz9zoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rlr8j9iso"/><path class="rb6407b-h"/><path class="w7cox2bpa"/><ellipse class="akauz9zoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-exchange"} {...others} />);
}

export default Component;

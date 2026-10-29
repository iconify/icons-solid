import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unn2jr1py.css';
import '../../css/n/nkf5ow3eb.css';
import '../../css/b/bwyxub51b.css';
import '../../css/d/d2wwclw8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="unn2jr1py wm-k"/><path class="nkf5ow3eb wm-k"/><path class="bwyxub51b wm-k"/><path class="d2wwclw8o wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-up-down"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lof1q6bsp.css';
import '../../css/x/x8gyjkn-s.css';
import '../../css/k/k9c86v2uu.css';
import '../../css/r/r2-y64b7n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lof1q6bsp"/><path class="x8gyjkn-s"/><path class="k9c86v2uu"/><path class="r2-y64b7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:inbox-open"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d_16acc-r.css';
import '../../css/x/x1myfjbky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d_16acc-r"/><path class="x1myfjbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:change-screen-mode"} {...others} />);
}

export default Component;

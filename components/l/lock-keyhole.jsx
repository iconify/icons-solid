import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m39im5btg.css';
import '../../css/i/irx-iw8lh.css';
import '../../css/u/u2ffjhxgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m39im5btg"/><path class="irx-iw8lh"/><circle class="u2ffjhxgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lock-keyhole"} {...others} />);
}

export default Component;

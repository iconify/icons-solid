import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyxtxvbbl.css';
import '../../css/d/diom9iltf.css';
import '../../css/l/lkt0z6aco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fyxtxvbbl"/><path class="diom9iltf"/><path class="lkt0z6aco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:jumpers"} {...others} />);
}

export default Component;

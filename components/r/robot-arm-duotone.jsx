import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0op42-db.css';
import '../../css/n/nazu9t1bw.css';
import '../../css/e/e-7p8xbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c0op42-db"/><path class="nazu9t1bw"/><path class="e-7p8xbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:robot-arm-duotone"} {...others} />);
}

export default Component;

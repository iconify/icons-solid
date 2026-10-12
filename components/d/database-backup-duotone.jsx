import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es97pcacw.css';
import '../../css/u/ucogdbb3g.css';
import '../../css/z/zxixl8bis.css';
import '../../css/i/i0uwf3kog.css';
import '../../css/c/cu2jleblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="es97pcacw"/><path class="ucogdbb3g"/><path class="zxixl8bis"/><path class="i0uwf3kog"/><path class="cu2jleblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-backup-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/r/r59knkn0n.css';
import '../../css/r/r28imlblv.css';
import '../../css/h/hh0pofoac.css';
import '../../css/u/utbsw7p0b.css';
import '../../css/a/a8s2x_b6e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="efhtg0b9p"/><path clip-rule="evenodd" class="r59knkn0n"/><path class="r28imlblv"/><path class="hh0pofoac"/><path class="utbsw7p0b"/><path class="a8s2x_b6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-subtract-2-raid-storage-code-disk-programming-database-array-hard-disc-minus"} {...others} />);
}

export default Component;

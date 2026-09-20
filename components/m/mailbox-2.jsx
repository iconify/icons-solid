import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wa8mu7blh.css';
import '../../css/u/usw6qq-kv.css';
import '../../css/f/fcskdrbyt.css';
import '../../css/t/t2boq-o6f.css';
import '../../css/c/c7mixb6tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wa8mu7blh"/><path class="usw6qq-kv"/><path class="fcskdrbyt"/><path class="t2boq-o6f"/><path class="c7mixb6tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mailbox-2"} {...others} />);
}

export default Component;

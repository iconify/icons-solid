import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjhhesbeq.css';
import '../../css/r/rwxffcbgc.css';
import '../../css/i/isfz-28nj.css';
import '../../css/s/szjj1eb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zjhhesbeq"/><path class="rwxffcbgc"/><path class="isfz-28nj"/><path class="szjj1eb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-pause-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kormnebaz.css';
import '../../css/p/pixfiacte.css';
import '../../css/o/oda795b_c.css';
import '../../css/g/gd5oyhbtz.css';
import '../../css/f/fptu256yt.css';
import '../../css/h/hds49-bqk.css';
import '../../css/t/t8_cs4vzo.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kormnebaz"/><path class="pixfiacte"/><path class="oda795b_c"/><path class="gd5oyhbtz"/><path class="fptu256yt"/><path class="hds49-bqk"/><path class="t8_cs4vzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:cream"} {...others} />);
}

export default Component;

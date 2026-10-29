import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/of04c5bbp.css';
import '../../css/r/r3ctk0beg.css';
import '../../css/z/z0lup6bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="of04c5bbp"/><path class="r3ctk0beg wm-a"/><path class="wm-s z0lup6bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mosque-solid"} {...others} />);
}

export default Component;

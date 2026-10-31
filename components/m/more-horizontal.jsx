import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/olch4qxxi.css';
import '../../css/b/b5ffqpx6z.css';
import '../../css/r/r3j1v0bfk.css';
import '../../css/n/n9khbr3yt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="olch4qxxi wm-shadow"/><path class="b5ffqpx6z wm-shadow"/><path class="r3j1v0bfk"/><path class="n9khbr3yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:more-horizontal"} {...others} />);
}

export default Component;

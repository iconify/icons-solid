import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ew9tz4bmz.css';
import '../../css/w/w1fsq0zwn.css';
import '../../css/f/f5bz_s3tr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ew9tz4bmz wm-shadow"/><path class="w1fsq0zwn wm-shadow"/><path class="f5bz_s3tr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:palm-tree"} {...others} />);
}

export default Component;

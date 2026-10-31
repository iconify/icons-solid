import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q7fwqs9ez.css';
import '../../css/k/k-y1mcqwj.css';
import '../../css/b/bysvqebda.css';
import '../../css/h/hozedccln.css';
import '../../css/n/nsr-9sb8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q7fwqs9ez wm-shadow"/><path class="k-y1mcqwj wm-shadow"/><path class="bysvqebda"/><path class="hozedccln"/><path class="nsr-9sb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rocket"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/ka9y6lbbx.css';
import '../../css/p/p03jw5u7r.css';
import '../../css/w/wh0ka_bqq.css';
import '../../css/e/ee3yy3d7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ka9y6lbbx wm-shadow"/><path class="p03jw5u7r wm-shadow"/><path class="wh0ka_bqq"/><path class="ee3yy3d7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:notepad-text"} {...others} />);
}

export default Component;

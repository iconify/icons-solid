import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iavtzwb4q.css';
import '../../css/t/t1lkh8bqh.css';
import '../../css/m/mw9k55b3g.css';
import '../../css/w/wbypqzodk.css';
import '../../css/x/x134agznq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="iavtzwb4q wm-shadow"/><path class="t1lkh8bqh wm-shadow"/><path class="mw9k55b3g"/><path class="wbypqzodk"/><path class="wm-s x134agznq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:package-plus"} {...others} />);
}

export default Component;

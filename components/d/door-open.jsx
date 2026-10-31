import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cntbxxb-u.css';
import '../../css/g/gxv26u8uu.css';
import '../../css/x/xoxv71b8a.css';
import '../../css/n/n_f1wwbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cntbxxb-u wm-shadow"/><path class="gxv26u8uu wm-shadow"/><path class="xoxv71b8a"/><path class="n_f1wwbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:door-open"} {...others} />);
}

export default Component;

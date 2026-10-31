import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lgjt7sb2t.css';
import '../../css/g/g9vxsgblh.css';
import '../../css/e/e7544v40j.css';
import '../../css/m/mxy1xab9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lgjt7sb2t wm-shadow"/><path class="g9vxsgblh wm-shadow"/><path class="e7544v40j"/><path class="mxy1xab9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:inbox"} {...others} />);
}

export default Component;

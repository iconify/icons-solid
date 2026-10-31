import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zx9jrfvbo.css';
import '../../css/k/kivgqhb0o.css';
import '../../css/j/j0kc2sbhe.css';
import '../../css/x/xsxarnrrl.css';
import '../../css/e/e3f52yb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zx9jrfvbo"/><path class="kivgqhb0o wm-shadow"/><path class="j0kc2sbhe"/><path class="xsxarnrrl"/><path class="e3f52yb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:spy"} {...others} />);
}

export default Component;

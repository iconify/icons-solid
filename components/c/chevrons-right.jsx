import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kvoqz67-p.css';
import '../../css/w/wx2_uc6pr.css';
import '../../css/d/dwxtqfi9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kvoqz67-p wm-shadow"/><path class="wm-shadow wx2_uc6pr"/><path class="dwxtqfi9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevrons-right"} {...others} />);
}

export default Component;

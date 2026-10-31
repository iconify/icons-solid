import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vc95bzn9u.css';
import '../../css/h/h2uz87ewu.css';
import '../../css/b/bqmpw2bfi.css';
import '../../css/e/eja-jdbms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vc95bzn9u wm-shadow"/><path class="h2uz87ewu wm-shadow"/><path class="bqmpw2bfi"/><path class="eja-jdbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevron-down"} {...others} />);
}

export default Component;

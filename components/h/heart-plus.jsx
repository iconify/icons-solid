import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ej-t5rbyo.css';
import '../../css/d/d85c5cb7t.css';
import '../../css/j/jqae8y5hl.css';
import '../../css/i/ie38f9e7r.css';
import '../../css/w/wgpdpne3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ej-t5rbyo wm-shadow"/><path class="d85c5cb7t wm-shadow"/><path class="jqae8y5hl"/><path class="ie38f9e7r"/><path class="wgpdpne3t wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-plus"} {...others} />);
}

export default Component;

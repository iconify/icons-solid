import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aq_dfdmdn.css';
import '../../css/m/m507fn5dq.css';
import '../../css/u/ufz4k47ac.css';
import '../../css/q/qslhfkn2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aq_dfdmdn wm-shadow"/><path class="m507fn5dq wm-shadow"/><path class="ufz4k47ac"/><path class="qslhfkn2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:screwdriver"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/scvr2trom.css';
import '../../css/r/rn8r4gb3a.css';
import '../../css/f/f8vzk8bcb.css';
import '../../css/e/e0coe8b4s.css';
import '../../css/q/q_frqnbce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="scvr2trom wm-shadow"/><path class="rn8r4gb3a wm-shadow"/><path class="f8vzk8bcb"/><path class="e0coe8b4s"/><path class="q_frqnbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:images"} {...others} />);
}

export default Component;

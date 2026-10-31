import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qsfqdxr5r.css';
import '../../css/d/dqgna771n.css';
import '../../css/c/c9mxgwtuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qsfqdxr5r wm-shadow"/><path class="dqgna771n wm-shadow"/><path class="c9mxgwtuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wrap-text"} {...others} />);
}

export default Component;

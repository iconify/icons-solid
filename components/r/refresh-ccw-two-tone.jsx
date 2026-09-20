import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/rgyr606zo.css';
import '../../css/c/c0h0dibhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="rgyr606zo"/><path class="c0h0dibhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-ccw-two-tone"} {...others} />);
}

export default Component;

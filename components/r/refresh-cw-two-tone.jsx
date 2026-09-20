import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/t/tgze5hbti.css';
import '../../css/s/stlmuj5hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="tgze5hbti"/><path class="stlmuj5hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-cw-two-tone"} {...others} />);
}

export default Component;

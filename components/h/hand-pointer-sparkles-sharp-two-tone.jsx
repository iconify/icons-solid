import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a8qmqgb6k.css';
import '../../css/s/snibgdcaa.css';
import '../../css/t/tmf9e1o6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="a8qmqgb6k"/><path class="snibgdcaa"/><path class="tmf9e1o6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mmhfqtz0e.css';
import '../../css/w/w4rw20y0k.css';
import '../../css/i/ijue4lwmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="mmhfqtz0e"/><path class="w4rw20y0k"/><path class="ijue4lwmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:flask"} {...others} />);
}

export default Component;

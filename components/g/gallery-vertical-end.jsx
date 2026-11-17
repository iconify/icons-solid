import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uc7uzkbwa.css';
import '../../css/u/u05znbefx.css';
import '../../css/n/nbimxkbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="uc7uzkbwa"/><path class="u05znbefx"/><path class="nbimxkbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:gallery-vertical-end"} {...others} />);
}

export default Component;

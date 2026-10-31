import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hws3f-bge.css';
import '../../css/x/x3forobtf.css';
import '../../css/r/r1s08cvrn.css';
import '../../css/e/eqj0kqn9h.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hws3f-bge wm-shadow"/><path class="wm-shadow x3forobtf"/><path class="r1s08cvrn"/><path class="eqj0kqn9h"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-off"} {...others} />);
}

export default Component;

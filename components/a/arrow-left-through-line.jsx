import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z_bj82b9f.css';
import '../../css/v/vjepk8-ck.css';
import '../../css/z/zxbe8_bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z_bj82b9f"/><path class="vjepk8-ck"/><path class="zxbe8_bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-left-through-line"} {...others} />);
}

export default Component;

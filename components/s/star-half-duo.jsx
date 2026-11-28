import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m08t2fb5l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vxnjoccwe.css';
import '../../css/u/u_4blpxzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m08t2fb5l secondary"/><g class="dt0cm9dhy primary"><path class="vxnjoccwe"/><path class="u_4blpxzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:star-half-duo"} {...others} />);
}

export default Component;

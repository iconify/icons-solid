import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b6ra2rkgs.css';
import '../../css/h/hyfvbjbmz.css';
import '../../css/x/xh7fozb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b6ra2rkgs"/><path class="hyfvbjbmz"/><path class="xh7fozb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:burger"} {...others} />);
}

export default Component;

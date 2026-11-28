import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w-q-3ub9b.css';
import '../../css/v/vmhukgb4r.css';
import '../../css/q/q470_h_wr.css';
import '../../css/o/ogbs5rbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w-q-3ub9b"/><path class="vmhukgb4r"/><path class="q470_h_wr"/><path class="ogbs5rbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:snake"} {...others} />);
}

export default Component;

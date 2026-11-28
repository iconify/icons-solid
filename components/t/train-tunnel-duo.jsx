import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b17a4p4dl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/au7a6tb1g.css';
import '../../css/a/a4g2qzb3h.css';
import '../../css/t/txxzuzbwv.css';
import '../../css/i/ieb9-qkpx.css';
import '../../css/p/pxz1_zber.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b17a4p4dl secondary"/><g class="dt0cm9dhy primary"><path class="au7a6tb1g"/><path class="a4g2qzb3h"/><path class="txxzuzbwv"/><path class="ieb9-qkpx"/><path class="pxz1_zber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:train-tunnel-duo"} {...others} />);
}

export default Component;

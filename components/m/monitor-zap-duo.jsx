import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhfyesugx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/i/izggtwq7w.css';
import '../../css/y/yhwtoub5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xhfyesugx"/><g class="dt0cm9dhy primary"><path class="uuw1qkbsv"/><path class="izggtwq7w"/><path class="yhwtoub5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-zap-duo"} {...others} />);
}

export default Component;

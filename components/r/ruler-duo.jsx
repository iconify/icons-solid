import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfu1nsbti.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cu6lg7pxc.css';
import '../../css/t/tapbstm2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfu1nsbti secondary"/><g class="dt0cm9dhy primary"><path class="cu6lg7pxc"/><path class="tapbstm2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ruler-duo"} {...others} />);
}

export default Component;

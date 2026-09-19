import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xq777kb9z.css';
import '../../css/t/tj4xg5bkf.css';
import '../../css/p/p7q04xb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xq777kb9z"/><path class="tj4xg5bkf"/><path class="p7q04xb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medal-01"} {...others} />);
}

export default Component;

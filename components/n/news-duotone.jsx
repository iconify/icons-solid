import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq704cctm.css';
import '../../css/i/ibxsn_bag.css';
import '../../css/a/axgyqgb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wq704cctm"/><rect class="ibxsn_bag"/><path class="axgyqgb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:news-duotone"} {...others} />);
}

export default Component;

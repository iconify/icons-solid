import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q9mhg2b_r.css';
import '../../css/o/o92xprdlg.css';
import '../../css/p/pdz0srsgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q9mhg2b_r"/><path class="o92xprdlg"/><path class="pdz0srsgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pear"} {...others} />);
}

export default Component;

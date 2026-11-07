import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lhwdbb20f.css';
import '../../css/q/q2o88f4-t.css';
import '../../css/u/uz6ulzc1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lhwdbb20f"/><path class="q2o88f4-t"/><path class="uz6ulzc1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-line-duotone"} {...others} />);
}

export default Component;

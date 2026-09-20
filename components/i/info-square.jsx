import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vv1-bc7dp.css';
import '../../css/h/ho7smwbzh.css';
import '../../css/q/q9mvo8b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vv1-bc7dp"/><path class="ho7smwbzh"/><circle class="q9mvo8b1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:info-square"} {...others} />);
}

export default Component;

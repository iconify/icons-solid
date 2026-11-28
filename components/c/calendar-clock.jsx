import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e5zqveb5m.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/k/k8gzt_h4u.css';
import '../../css/b/bhu664byo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e5zqveb5m"/><path class="w7_mhrwuu"/><path class="k8gzt_h4u"/><path class="bhu664byo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calendar-clock"} {...others} />);
}

export default Component;

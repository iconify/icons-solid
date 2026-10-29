import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ydgy_wbel.css';
import '../../css/t/t218te2ox.css';
import '../../css/m/mq1ml1bev.css';
import '../../css/u/u3oj7pbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco ydgy_wbel"/><path class="t218te2ox wm-deco"/><path class="mq1ml1bev wm-k"/><path class="u3oj7pbmo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-merge-blueprint"} {...others} />);
}

export default Component;

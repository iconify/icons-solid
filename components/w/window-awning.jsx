import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-zmabc9e.css';
import '../../css/i/ib51isosu.css';
import '../../css/y/yqu__acba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q-zmabc9e"/><path class="ib51isosu"/><path class="yqu__acba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:window-awning"} {...others} />);
}

export default Component;

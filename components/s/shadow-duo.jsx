import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yphowe6hs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lz4w1hvbo.css';
import '../../css/q/q_1y_n85o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yphowe6hs"/><g class="dt0cm9dhy primary"><path class="lz4w1hvbo"/><path class="q_1y_n85o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shadow-duo"} {...others} />);
}

export default Component;

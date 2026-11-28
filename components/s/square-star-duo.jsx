import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n12fu4gut.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/s/sunn0ibms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n12fu4gut secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="sunn0ibms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-star-duo"} {...others} />);
}

export default Component;

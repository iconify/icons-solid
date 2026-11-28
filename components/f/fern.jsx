import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/awk-gs1rj.css';
import '../../css/a/acbw8blce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="awk-gs1rj"/><path class="acbw8blce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fern"} {...others} />);
}

export default Component;

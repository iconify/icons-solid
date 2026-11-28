import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/saij5kb4t.css';
import '../../css/n/n3xvoccbk.css';
import '../../css/t/te09yrbly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="saij5kb4t"/><path class="n3xvoccbk"/><path class="te09yrbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-down-to-line-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/die20-bcf.css';
import '../../css/q/qqww5s1hy.css';
import '../../css/p/pd8vt0rck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><circle class="die20-bcf"/><path class="qqww5s1hy"/><path class="pd8vt0rck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:route-arrow"} {...others} />);
}

export default Component;

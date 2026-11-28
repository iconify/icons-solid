import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ah0urkbhs.css';
import '../../css/t/tc93pxbsj.css';
import '../../css/s/sq0pxym8x.css';
import '../../css/s/s-rb7rb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ah0urkbhs"/><path class="tc93pxbsj"/><path class="sq0pxym8x"/><path class="s-rb7rb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hand-bell"} {...others} />);
}

export default Component;

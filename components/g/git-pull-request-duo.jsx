import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ey1zp4b_a.css';
import '../../css/g/gorsochjg.css';
import '../../css/q/qy6s686ad.css';
import '../../css/y/yatyg0v9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ey1zp4b_a"/><path class="gorsochjg"/><path class="qy6s686ad"/><path class="yatyg0v9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qym2g0yhd.css';
import '../../css/c/cvygwcb1l.css';
import '../../css/a/a5ognjdal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qym2g0yhd"/><path class="cvygwcb1l"/><path class="a5ognjdal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-duo"} {...others} />);
}

export default Component;

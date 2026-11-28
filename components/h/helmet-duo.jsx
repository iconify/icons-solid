import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01xbfbgf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d-9bk_b_m.css';
import '../../css/w/wf2t-zq0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h01xbfbgf secondary"/><g class="dt0cm9dhy primary"><path class="d-9bk_b_m"/><path class="wf2t-zq0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:helmet-duo"} {...others} />);
}

export default Component;

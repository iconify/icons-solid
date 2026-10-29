import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ucrpzibcp.css';
import '../../css/i/idtixcqse.css';
import '../../css/e/ei78qw1bk.css';
import '../../css/q/qwc4vnbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ucrpzibcp"/><path class="idtixcqse wm-s"/><path class="ei78qw1bk"/><path class="qwc4vnbsf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:siren-duo"} {...others} />);
}

export default Component;

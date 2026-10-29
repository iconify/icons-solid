import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pgggxhtzb.css';
import '../../css/r/rzoychbjy.css';
import '../../css/f/fmn_qacoy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pgggxhtzb"/><path class="rzoychbjy wm-a"/><path class="fmn_qacoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ruler-duo"} {...others} />);
}

export default Component;

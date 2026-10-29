import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tagrm1y9i.css';
import '../../css/n/nl8u9ehql.css';
import '../../css/a/a_-f_rbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tagrm1y9i"/><path class="nl8u9ehql wm-a"/><path class="a_-f_rbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:keyboard-duo"} {...others} />);
}

export default Component;

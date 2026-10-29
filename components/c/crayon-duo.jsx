import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bu3_l_blx.css';
import '../../css/b/b058v_bim.css';
import '../../css/p/psuc-s3be.css';
import '../../css/f/fjwd2bbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bu3_l_blx"/><path class="b058v_bim wm-a"/><path class="psuc-s3be"/><path class="fjwd2bbvb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crayon-duo"} {...others} />);
}

export default Component;

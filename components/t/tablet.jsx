import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s3bjvdjgt.css';
import '../../css/i/i29ijccji.css';
import '../../css/f/fvotqrotm.css';
import '../../css/j/jhx3lbcza.css';
import '../../css/v/v_3ey4b_t.css';
import '../../css/b/bk8pt3b2f.css';
import '../../css/s/spcrfc8qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="s3bjvdjgt wm-shadow"/><path class="i29ijccji"/><path class="fvotqrotm"/><path class="jhx3lbcza"/><path class="v_3ey4b_t"/><path class="bk8pt3b2f wm-shine"/><path class="spcrfc8qp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tablet"} {...others} />);
}

export default Component;

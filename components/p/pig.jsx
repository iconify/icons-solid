import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_l603j6c.css';
import '../../css/v/v_xf23bai.css';
import '../../css/h/hls847k7d.css';
import '../../css/i/iuw79fb0f.css';
import '../../css/d/dywx7l71k.css';
import '../../css/g/g5biloacp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a_l603j6c"/><ellipse class="v_xf23bai"/><circle class="hls847k7d"/><circle class="iuw79fb0f"/><circle class="dywx7l71k"/><circle class="g5biloacp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pig"} {...others} />);
}

export default Component;

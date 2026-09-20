import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbd_zab8k.css';
import '../../css/m/m0iur5zoc.css';
import '../../css/o/ogravqi0i.css';
import '../../css/p/ptswahb4u.css';
import '../../css/v/v3a34-bpy.css';
import '../../css/i/iu_dkc3tn.css';
import '../../css/j/j89nx76no.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sbd_zab8k"/><path class="m0iur5zoc"/><path class="ogravqi0i"/><path class="ptswahb4u"/><path class="v3a34-bpy"/><path class="iu_dkc3tn"/><path class="j89nx76no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-chair"} {...others} />);
}

export default Component;

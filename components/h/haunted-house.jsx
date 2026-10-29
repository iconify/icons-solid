import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xbgq3sb8x.css';
import '../../css/e/euuko_bjy.css';
import '../../css/t/t7v7a8ogm.css';
import '../../css/t/tzxk9-b-i.css';
import '../../css/p/p0z_z4bsi.css';
import '../../css/o/ozxrp4gtb.css';
import '../../css/s/smq2y_u2c.css';
import '../../css/g/gs3r4tccv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xbgq3sb8x"/><path class="euuko_bjy"/><path class="t7v7a8ogm"/><path class="tzxk9-b-i"/><path class="p0z_z4bsi wm-shine"/><path class="ozxrp4gtb wm-s"/><path class="smq2y_u2c wm-s"/><path class="gs3r4tccv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:haunted-house"} {...others} />);
}

export default Component;

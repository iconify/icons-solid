import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sn-5ovbxf.css';
import '../../css/s/s_g4zm_6z.css';
import '../../css/r/rs6vtfinx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sn-5ovbxf"/><path class="s_g4zm_6z"/><path class="rs6vtfinx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:voice-mail"} {...others} />);
}

export default Component;

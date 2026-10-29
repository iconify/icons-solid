import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zm9blybcx.css';
import '../../css/x/x58sohbxv.css';
import '../../css/a/aqqdqjb5s.css';
import '../../css/f/fz43jpbxl.css';
import '../../css/v/vhj9webyq.css';
import '../../css/x/xp14qmzhq.css';
import '../../css/m/m_43y4i2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zm9blybcx"/><path class="x58sohbxv"/><path class="aqqdqjb5s"/><path class="fz43jpbxl"/><path class="vhj9webyq"/><path class="wm-shine xp14qmzhq"/><path class="m_43y4i2q wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:users-round"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb-u-q-7f.css';
import '../../css/d/dvl-5rbdu.css';
import '../../css/s/sku7lgf0f.css';
import '../../css/m/m_typy8mu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sb-u-q-7f"/><path class="dvl-5rbdu"/><path class="sku7lgf0f"/><path class="m_typy8mu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:person-edit"} {...others} />);
}

export default Component;

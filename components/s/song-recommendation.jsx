import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fejlmdp3f.css';
import '../../css/s/s10qhb96i.css';
import '../../css/q/qz3m_8bce.css';
import '../../css/l/llf_c2b3d.css';
import '../../css/t/tfkvnkgaj.css';
import '../../css/f/f-aqmtvin.css';
import '../../css/y/ymggh8b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fejlmdp3f"/><path class="s10qhb96i"/><path class="qz3m_8bce"/><path class="llf_c2b3d"/><path class="tfkvnkgaj"/><path class="f-aqmtvin"/><path class="ymggh8b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:song-recommendation"} {...others} />);
}

export default Component;

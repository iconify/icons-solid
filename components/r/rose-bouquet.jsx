import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/odwuxebsi.css';
import '../../css/s/st885actg.css';
import '../../css/l/lgi-3qbpy.css';
import '../../css/v/v1u_kw68i.css';
import '../../css/u/ugwrafb6w.css';
import '../../css/y/y1wzytb5f.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="odwuxebsi wm-shadow"/><path class="st885actg"/><path class="lgi-3qbpy"/><path class="v1u_kw68i"/><path class="ugwrafb6w"/><path class="y1wzytb5f"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rose-bouquet"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y6055741k.css';
import '../../css/t/t7hd4thte.css';
import '../../css/l/lsci6ea5w.css';
import '../../css/m/mdfpyyb1t.css';
import '../../css/d/doy9q4b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y6055741k"/><path class="t7hd4thte"/><path class="lsci6ea5w"/><path class="mdfpyyb1t"/><circle class="doy9q4b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-circle-line-duotone"} {...others} />);
}

export default Component;

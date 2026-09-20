import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kdybctn7p.css';
import '../../css/d/drs9macuz.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="kdybctn7p"/><path class="drs9macuz"/><path class="sp3ujwwyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-sharp-fill"} {...others} />);
}

export default Component;

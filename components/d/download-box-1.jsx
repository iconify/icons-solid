import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pvt2e0blh.css';
import '../../css/d/d-z2jhjiw.css';
import '../../css/e/ed8eizzez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pvt2e0blh"/><path class="d-z2jhjiw"/><path class="ed8eizzez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:download-box-1"} {...others} />);
}

export default Component;

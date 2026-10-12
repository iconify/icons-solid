import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjsjbv3zt.css';
import '../../css/v/vtdiuyl3i.css';
import '../../css/d/dyr4g0gac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qjsjbv3zt"/><rect transform="rotate(90 0 21.26)scale(-1 1)" class="vtdiuyl3i"/><path class="dyr4g0gac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mosaic"} {...others} />);
}

export default Component;

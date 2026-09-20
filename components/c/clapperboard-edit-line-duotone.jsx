import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1559hbqt.css';
import '../../css/h/hd_r6sdbz.css';
import '../../css/u/udkm02blq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x1559hbqt"/><path class="hd_r6sdbz"/><path class="udkm02blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-edit-line-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/alk7dvb9p.css';
import '../../css/n/nmjbsk1wt.css';
import '../../css/q/qg4ud0b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="alk7dvb9p"/><path class="nmjbsk1wt"/><path class="qg4ud0b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-start-percent-sharp-duotone"} {...others} />);
}

export default Component;

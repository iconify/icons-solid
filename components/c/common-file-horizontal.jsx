import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z31ro663j.css';
import '../../css/m/mvrr7db2a.css';
import '../../css/w/wbv8jlbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z31ro663j"/><path class="mvrr7db2a"/><path class="wbv8jlbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:common-file-horizontal"} {...others} />);
}

export default Component;

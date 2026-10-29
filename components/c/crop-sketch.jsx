import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gmt1fkdfv.css';
import '../../css/f/fm6rs2b9w.css';
import '../../css/n/npx1ntq6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gmt1fkdfv"/><path class="fm6rs2b9w"/><path class="npx1ntq6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crop-sketch"} {...others} />);
}

export default Component;

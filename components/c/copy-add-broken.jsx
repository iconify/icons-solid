import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t60_6fbkn.css';
import '../../css/n/n6gwi0b2o.css';
import '../../css/i/id06jcc5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t60_6fbkn"/><path class="n6gwi0b2o"/><path class="id06jcc5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-add-broken"} {...others} />);
}

export default Component;

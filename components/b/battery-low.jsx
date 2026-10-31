import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tn8ic7bdh.css';
import '../../css/p/p7_8ibche.css';
import '../../css/l/lwwxmbbws.css';
import '../../css/g/gu80bdcbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tn8ic7bdh wm-shadow"/><path class="p7_8ibche wm-shadow"/><path class="lwwxmbbws"/><path class="gu80bdcbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:battery-low"} {...others} />);
}

export default Component;

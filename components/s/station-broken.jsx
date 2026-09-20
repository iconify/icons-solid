import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnv2k765b.css';
import '../../css/v/v9d7kbn5e.css';
import '../../css/u/um_27sbup.css';
import '../../css/e/e_c-iubxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vnv2k765b"/><path class="v9d7kbn5e"/><circle class="um_27sbup"/><path class="e_c-iubxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-broken"} {...others} />);
}

export default Component;

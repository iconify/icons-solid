import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/st3a4ib_h.css';
import '../../css/d/dv4gr9bmd.css';
import '../../css/h/hav7c1hub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="st3a4ib_h"/><path class="dv4gr9bmd"/><path class="hav7c1hub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:login"} {...others} />);
}

export default Component;

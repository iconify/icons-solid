import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/t/tw30_ubet.css';
import '../../css/y/yic1xvbbc.css';
import '../../css/r/rla8vkbqm.css';
import '../../css/a/ag5fhkz2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="tw30_ubet"/><path class="yic1xvbbc"/><path class="rla8vkbqm"/><path class="ag5fhkz2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-3-broken"} {...others} />);
}

export default Component;

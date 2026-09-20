import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wim-ombnw.css';
import '../../css/c/ck2o6mb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wim-ombnw"/><path class="ck2o6mb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:refresh"} {...others} />);
}

export default Component;

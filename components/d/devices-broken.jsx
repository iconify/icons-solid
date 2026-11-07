import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fkkg3bbkz.css';
import '../../css/u/ubda_ab4e.css';
import '../../css/p/pbcwo2bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fkkg3bbkz"/><path class="ubda_ab4e"/><path class="pbcwo2bql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:devices-broken"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ror8fyj6a.css';
import '../../css/u/ul0rk9bgh.css';
import '../../css/w/w29ath28m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ror8fyj6a"/><path class="ul0rk9bgh"/><path class="w29ath28m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:temperature-linear"} {...others} />);
}

export default Component;

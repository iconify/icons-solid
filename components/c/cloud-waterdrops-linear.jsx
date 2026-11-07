import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cf-4imbpi.css';
import '../../css/r/rxf5pixtu.css';
import '../../css/e/e6k5rfbvz.css';
import '../../css/n/nc6t2vbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cf-4imbpi"/><path class="rxf5pixtu"/><path class="e6k5rfbvz"/><path class="nc6t2vbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-waterdrops-linear"} {...others} />);
}

export default Component;

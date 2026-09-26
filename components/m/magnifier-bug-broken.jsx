import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ig7l8tpsj.css';
import '../../css/x/x09loybdy.css';
import '../../css/o/o3o_tvbax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ig7l8tpsj"/><path class="x09loybdy"/><path class="o3o_tvbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-bug-broken"} {...others} />);
}

export default Component;

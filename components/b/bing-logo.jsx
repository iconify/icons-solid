import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/w/wjjq3cc4n.css';
import '../../css/p/piypaobsz.css';
import '../../css/o/oosxrvxhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="wjjq3cc4n"/><path class="piypaobsz"/><path class="oosxrvxhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:bing-logo"} {...others} />);
}

export default Component;

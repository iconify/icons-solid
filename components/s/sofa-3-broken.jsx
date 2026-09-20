import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rwrmkrb4x.css';
import '../../css/w/wkj-gfbiy.css';
import '../../css/f/f93u32esc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rwrmkrb4x"/><path class="wkj-gfbiy"/><path class="f93u32esc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-3-broken"} {...others} />);
}

export default Component;

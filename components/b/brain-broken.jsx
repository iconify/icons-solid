import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nolfx4b0d.css';
import '../../css/y/yqkjq03-f.css';
import '../../css/h/hmy4q8b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nolfx4b0d"/><path class="yqkjq03-f"/><path class="hmy4q8b1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-broken"} {...others} />);
}

export default Component;

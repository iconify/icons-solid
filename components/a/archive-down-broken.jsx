import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m97iezbay.css';
import '../../css/m/mjojrgq4j.css';
import '../../css/d/dujh-y52z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m97iezbay"/><path class="mjojrgq4j"/><path class="dujh-y52z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-broken"} {...others} />);
}

export default Component;

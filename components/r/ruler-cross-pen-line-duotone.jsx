import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/phsmk7b-g.css';
import '../../css/n/n-_-ghbzs.css';
import '../../css/p/ph4irppsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="phsmk7b-g"/><path class="n-_-ghbzs"/><path class="ph4irppsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-cross-pen-line-duotone"} {...others} />);
}

export default Component;

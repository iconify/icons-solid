import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d5ef0obdu.css';
import '../../css/q/qaoxoacmy.css';
import '../../css/p/ppz_4gikv.css';
import '../../css/y/yhhda8bfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d5ef0obdu"/><path class="qaoxoacmy"/><path class="ppz_4gikv"/><path class="yhhda8bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:police-station"} {...others} />);
}

export default Component;

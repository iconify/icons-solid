import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jf4xiob2j.css';
import '../../css/g/gpcy8vslv.css';
import '../../css/i/in_9y-pym.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jf4xiob2j"/><rect class="gpcy8vslv"/><path class="in_9y-pym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:beauty-instrument"} {...others} />);
}

export default Component;

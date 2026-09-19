import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qjjjy4boz.css';
import '../../css/m/mw0po8bwv.css';
import '../../css/i/i7y0tbbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qjjjy4boz"/><path class="mw0po8bwv"/><path class="i7y0tbbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:new-office"} {...others} />);
}

export default Component;

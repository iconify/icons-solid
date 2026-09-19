import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owq791c7u.css';
import '../../css/b/ba-p_djvn.css';
import '../../css/l/laqqp5b-s.css';
import '../../css/b/bgex54baj.css';
import '../../css/u/uvzpq9h1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="owq791c7u"/><path class="ba-p_djvn"/><path class="laqqp5b-s"/><path class="bgex54baj"/><path class="uvzpq9h1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taj-mahal"} {...others} />);
}

export default Component;

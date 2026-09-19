import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u1vhlt4_a.css';
import '../../css/g/g3loe6yfe.css';
import '../../css/f/felm6jbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u1vhlt4_a"/><path class="g3loe6yfe"/><path class="felm6jbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tv-smart"} {...others} />);
}

export default Component;

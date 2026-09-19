import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vhhn7sf4c.css';
import '../../css/j/jpe9a_1ci.css';
import '../../css/c/c2r4yob4m.css';
import '../../css/g/glza9bc4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vhhn7sf4c"/><path class="jpe9a_1ci"/><path class="c2r4yob4m"/><path class="glza9bc4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:test-tube-03"} {...others} />);
}

export default Component;

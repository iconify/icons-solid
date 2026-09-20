import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dpfspg3tv.css';
import '../../css/i/i5p1eqb6p.css';
import '../../css/g/glahfmzew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dpfspg3tv"/><path class="i5p1eqb6p"/><path class="glahfmzew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-broken"} {...others} />);
}

export default Component;

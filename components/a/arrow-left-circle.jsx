import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/got39gbyx.css';
import '../../css/b/b6lqqvb2b.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="got39gbyx"/><path class="b6lqqvb2b"/><path class="n5pc76bja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-left-circle"} {...others} />);
}

export default Component;

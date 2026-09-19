import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vupjzmmpw.css';
import '../../css/t/tpe31d3ts.css';
import '../../css/h/hi0hwccqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vupjzmmpw"/><path class="tpe31d3ts"/><path class="hi0hwccqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contact"} {...others} />);
}

export default Component;

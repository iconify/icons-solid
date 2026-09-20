import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iygwf-bmn.css';
import '../../css/l/l_saarbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iygwf-bmn"/><path class="l_saarbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-line-spacing"} {...others} />);
}

export default Component;

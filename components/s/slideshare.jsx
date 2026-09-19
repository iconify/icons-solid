import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tm_20acfa.css';
import '../../css/w/w3auhlb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tm_20acfa"/><path class="w3auhlb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:slideshare"} {...others} />);
}

export default Component;

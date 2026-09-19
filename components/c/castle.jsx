import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yjxmw6bik.css';
import '../../css/t/t-5avtbey.css';
import '../../css/a/aswk6qohq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yjxmw6bik"/><path class="t-5avtbey"/><path class="aswk6qohq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:castle"} {...others} />);
}

export default Component;

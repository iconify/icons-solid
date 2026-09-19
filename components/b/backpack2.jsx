import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osq3ckenx.css';
import '../../css/h/hyystbc4j.css';
import '../../css/e/emip_1b-v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="osq3ckenx"/><path class="hyystbc4j"/><path class="emip_1b-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:backpack2"} {...others} />);
}

export default Component;

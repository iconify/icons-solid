import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bcrdq2e4j.css';
import '../../css/r/rzvku9xgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bcrdq2e4j"/><path class="rzvku9xgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-outcome-01"} {...others} />);
}

export default Component;

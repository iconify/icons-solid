import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/we2d1dbtw.css';
import '../../css/i/ijfu_m85q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="we2d1dbtw"/><path class="ijfu_m85q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:identity-card-check"} {...others} />);
}

export default Component;

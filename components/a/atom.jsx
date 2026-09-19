import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_dcv8bbe.css';
import '../../css/r/rf9tq_bna.css';
import '../../css/i/i29n7n-0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i_dcv8bbe"/><path class="rf9tq_bna"/><path class="i29n7n-0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:atom"} {...others} />);
}

export default Component;

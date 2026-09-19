import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t74iv4v5p.css';
import '../../css/s/shd_p8bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t74iv4v5p"/><path class="shd_p8bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-19-virus-pandemic-2"} {...others} />);
}

export default Component;

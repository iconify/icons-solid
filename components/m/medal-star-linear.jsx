import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v7q1lwidl.css';
import '../../css/v/ve0hig3pz.css';
import '../../css/y/y4qe-ubzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v7q1lwidl"/><path class="ve0hig3pz"/><path class="y4qe-ubzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-linear"} {...others} />);
}

export default Component;

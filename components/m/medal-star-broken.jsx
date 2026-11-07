import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j8ful4bxb.css';
import '../../css/r/ryhgqrraa.css';
import '../../css/v/v7q1lwidl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j8ful4bxb"/><path class="ryhgqrraa"/><path class="v7q1lwidl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-broken"} {...others} />);
}

export default Component;

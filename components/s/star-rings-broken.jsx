import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sm8kzccgq.css';
import '../../css/j/jlj8l_bps.css';
import '../../css/y/yxpmksx3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sm8kzccgq"/><path class="jlj8l_bps"/><path class="yxpmksx3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rings-broken"} {...others} />);
}

export default Component;

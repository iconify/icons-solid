import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7q0ht_hy.css';
import '../../css/d/dvn4mnkrs.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q7q0ht_hy"/><path class="dvn4mnkrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:streamlit-wordmark"} {...others} />);
}

export default Component;

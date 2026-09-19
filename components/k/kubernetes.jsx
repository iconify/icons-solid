import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt53_51gy.css';
import '../../css/j/jvxlq78ce.css';
import '../../css/j/j_vpq2bok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt53_51gy"/><path class="jvxlq78ce"/><path class="j_vpq2bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:kubernetes"} {...others} />);
}

export default Component;

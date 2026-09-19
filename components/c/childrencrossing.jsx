import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiqoifb9v.css';
import '../../css/j/jbfppiblv.css';
import '../../css/y/y_zpwn9tr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tiqoifb9v"/><path class="jbfppiblv"/><path class="y_zpwn9tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:childrencrossing"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdtrtu05y.css';
import '../../css/r/r4p88q1ra.css';

const viewBox = {"width":1550,"height":971};
const content = `<path class="wdtrtu05y"/><path class="r4p88q1ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mondelez-international-dark"} {...others} />);
}

export default Component;

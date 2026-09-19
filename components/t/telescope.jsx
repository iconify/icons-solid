import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4p45cnlu.css';
import '../../css/a/a12tcab1o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t4p45cnlu"/><path class="a12tcab1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:telescope"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksq4q7bdt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ksq4q7bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:letter-vv"} {...others} />);
}

export default Component;

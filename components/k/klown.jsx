import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kod7n39qq.css';
import '../../css/s/sh8kg65pu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kod7n39qq"/><path class="sh8kg65pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:klown"} {...others} />);
}

export default Component;

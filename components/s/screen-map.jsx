import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylpoqbbdx.css';
import '../../css/k/klf1_rboj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ylpoqbbdx"/><path class="klf1_rboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:screen-map"} {...others} />);
}

export default Component;

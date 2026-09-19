import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kzfbw8bhx.css';
import '../../css/g/gor7pb1cv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="kzfbw8bhx"/><path class="gor7pb1cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:cred"} {...others} />);
}

export default Component;

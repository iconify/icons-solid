import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ckbwsh2jd.css';
import '../../css/h/htcg-xorx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ckbwsh2jd"/><path class="htcg-xorx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ngc"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3-denbmb.css';
import '../../css/x/x141tmu0b.css';
import '../../css/t/tvgnlnb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j3-denbmb"/><path class="x141tmu0b"/><path class="tvgnlnb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:payment-success-01"} {...others} />);
}

export default Component;

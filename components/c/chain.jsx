import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/yjl_wcbcy.css';
import '../../css/c/ct_8xsb-x.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="to0c2ub7t"><rect transform="rotate(33.038 12.784 2.384)" class="yjl_wcbcy"/><rect transform="rotate(33.038 7.836 6.323)" class="ct_8xsb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:chain"} {...others} />);
}

export default Component;

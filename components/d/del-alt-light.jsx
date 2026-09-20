import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/ypxgppbhb.css';
import '../../css/z/zq1l8-bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="ypxgppbhb"/><path class="zq1l8-bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:del-alt-light"} {...others} />);
}

export default Component;

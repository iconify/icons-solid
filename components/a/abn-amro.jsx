import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hlmuacczv.css';
import '../../css/x/xqpu6_dfe.css';

const viewBox = {"width":1549,"height":2062};
const content = `<g class="d2kvgvbvc"><path class="hlmuacczv"/><path class="xqpu6_dfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:abn-amro"} {...others} />);
}

export default Component;

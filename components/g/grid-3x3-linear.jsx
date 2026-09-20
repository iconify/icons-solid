import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gaey7fiif.css';
import '../../css/a/a6wvo-b3o.css';
import '../../css/j/jojyntb-y.css';
import '../../css/z/ztzrfkqqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gaey7fiif"/><path class="a6wvo-b3o"/><path class="jojyntb-y"/><path class="ztzrfkqqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-3x3-linear"} {...others} />);
}

export default Component;

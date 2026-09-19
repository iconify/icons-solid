import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bwlz-_lem.css';
import '../../css/t/t2mokvbsr.css';
import '../../css/n/ninu6dbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bwlz-_lem"/><path class="t2mokvbsr"/><path class="ninu6dbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dates"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-ahjfb0g.css';
import '../../css/y/ydy6h4gep.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="y-ahjfb0g"/><circle class="ydy6h4gep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:at-sign"} {...others} />);
}

export default Component;

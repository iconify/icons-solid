import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ydy6h4gep.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="8 1.25 14.25 4.75 14.25 11.25 8 14.75 1.75 11.25 1.75 4.75"/><circle class="ydy6h4gep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:nut"} {...others} />);
}

export default Component;

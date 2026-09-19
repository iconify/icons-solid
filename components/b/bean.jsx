import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e51ms8txy.css';
import '../../css/g/gl-auxbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e51ms8txy"/><path class="gl-auxbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bean"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z7nalfl1j.css';
import '../../css/j/jtpy8fbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z7nalfl1j"/><path class="jtpy8fbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gauge"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oxj5z9e-b.css';
import '../../css/t/ti0uovb4m.css';
import '../../css/y/y6yajw26h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oxj5z9e-b"/><path class="ti0uovb4m"/><path class="y6yajw26h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframes"} {...others} />);
}

export default Component;

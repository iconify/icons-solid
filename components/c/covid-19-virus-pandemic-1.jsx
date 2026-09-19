import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok6k5b6nb.css';
import '../../css/e/emdkxcbdp.css';
import '../../css/o/owc868bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ok6k5b6nb"/><path class="emdkxcbdp"/><path class="owc868bvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-19-virus-pandemic-1"} {...others} />);
}

export default Component;

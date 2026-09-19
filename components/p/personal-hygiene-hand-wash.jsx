import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cl0hkcbwd.css';
import '../../css/t/t7k_97bml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cl0hkcbwd"/><path class="t7k_97bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-wash"} {...others} />);
}

export default Component;

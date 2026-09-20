import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3a64kbcs.css';
import '../../css/l/lqycpklho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l3a64kbcs"/><path class="lqycpklho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:signal2"} {...others} />);
}

export default Component;

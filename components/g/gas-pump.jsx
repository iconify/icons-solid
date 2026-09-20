import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/grqj15bkb.css';
import '../../css/k/k5w-56bxk.css';
import '../../css/d/df1a4kbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="grqj15bkb"/><path class="k5w-56bxk"/><path class="df1a4kbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gas-pump"} {...others} />);
}

export default Component;

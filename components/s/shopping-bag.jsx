import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6z808btb.css';
import '../../css/q/qkah8mg9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r6z808btb"/><path class="qkah8mg9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shopping-bag"} {...others} />);
}

export default Component;

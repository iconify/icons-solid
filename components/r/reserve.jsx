import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kdck9ccwr.css';
import '../../css/y/yhm5_-cgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kdck9ccwr"/><path class="yhm5_-cgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:reserve"} {...others} />);
}

export default Component;

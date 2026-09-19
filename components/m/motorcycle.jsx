import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hshzn433f.css';
import '../../css/v/vnnbe5bxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hshzn433f"/><path class="vnnbe5bxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:motorcycle"} {...others} />);
}

export default Component;

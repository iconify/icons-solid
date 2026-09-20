import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/too0zm2ef.css';
import '../../css/r/rda75p-5s.css';
import '../../css/y/yzpjxzhlg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="too0zm2ef"/><path class="rda75p-5s"/><path class="yzpjxzhlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bicycle"} {...others} />);
}

export default Component;

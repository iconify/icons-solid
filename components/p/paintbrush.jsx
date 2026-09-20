import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ya_u4acbg.css';
import '../../css/z/ze-ddynnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ya_u4acbg"/><path class="ze-ddynnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:paintbrush"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j8185sbtm.css';
import '../../css/z/ze-ddynnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j8185sbtm"/><path class="ze-ddynnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:paintbrush"} {...others} />);
}

export default Component;

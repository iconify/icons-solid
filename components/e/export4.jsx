import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdbns1bsd.css';
import '../../css/a/ap3ponbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qdbns1bsd"/><path class="ap3ponbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:export4"} {...others} />);
}

export default Component;

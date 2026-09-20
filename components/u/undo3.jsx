import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wg1kjubwb.css';
import '../../css/j/jqev7cyil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wg1kjubwb"/><path class="jqev7cyil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:undo3"} {...others} />);
}

export default Component;

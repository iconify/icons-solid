import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jqir14brt.css';
import '../../css/n/n_0ywprtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jqir14brt"/><path class="n_0ywprtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-language-monitor-css"} {...others} />);
}

export default Component;

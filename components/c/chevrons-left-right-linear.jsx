import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo7nhnbsw.css';
import '../../css/n/n18lttbuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bo7nhnbsw"/><path class="n18lttbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-linear"} {...others} />);
}

export default Component;

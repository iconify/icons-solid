import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2pk1ut_e.css';
import '../../css/d/dskmcgbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p2pk1ut_e"/><path class="dskmcgbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-search"} {...others} />);
}

export default Component;

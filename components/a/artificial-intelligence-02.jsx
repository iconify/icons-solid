import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvkw6ljnc.css';
import '../../css/y/ybrtg879e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jvkw6ljnc"/><path class="ybrtg879e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-02"} {...others} />);
}

export default Component;

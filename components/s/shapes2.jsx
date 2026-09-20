import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao9yr5bhc.css';
import '../../css/p/pidxmvnnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ao9yr5bhc"/><path class="pidxmvnnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shapes2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gr1vjs2zu.css';
import '../../css/x/xvfgdwb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gr1vjs2zu"/><path class="xvfgdwb2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-pen"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vv638qbws.css';
import '../../css/y/yak7gdbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vv638qbws"/><path class="yak7gdbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-up-left"} {...others} />);
}

export default Component;

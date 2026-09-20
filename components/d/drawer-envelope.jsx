import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr-k5hb4l.css';
import '../../css/t/tgh3kdyuv.css';
import '../../css/x/xi84ow41q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dr-k5hb4l"/><path class="tgh3kdyuv"/><path class="xi84ow41q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:drawer-envelope"} {...others} />);
}

export default Component;

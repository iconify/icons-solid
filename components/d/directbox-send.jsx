import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p68wimf2h.css';
import '../../css/v/vdi0_mbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p68wimf2h"/><path class="vdi0_mbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:directbox-send"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vo6e7wiro.css';
import '../../css/g/gfyc_6b9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vo6e7wiro"/><path class="gfyc_6b9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-circle-dashed"} {...others} />);
}

export default Component;

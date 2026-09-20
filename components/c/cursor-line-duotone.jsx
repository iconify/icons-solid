import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbo1_27wh.css';
import '../../css/b/bhl61jbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pbo1_27wh"/><path class="bhl61jbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cursor-line-duotone"} {...others} />);
}

export default Component;

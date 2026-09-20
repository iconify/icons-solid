import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3b5zyq_o.css';
import '../../css/j/jwn9yibsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h3b5zyq_o"/><path class="jwn9yibsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:checkup-diagnostic"} {...others} />);
}

export default Component;

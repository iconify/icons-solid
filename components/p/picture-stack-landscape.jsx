import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k43-hyx6y.css';
import '../../css/c/cd7c2obwf.css';
import '../../css/j/j_v8op_ik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k43-hyx6y"/><path class="cd7c2obwf"/><path class="j_v8op_ik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:picture-stack-landscape"} {...others} />);
}

export default Component;

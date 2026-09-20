import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-wf-ib2y.css';
import '../../css/j/jc6w6-bos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a-wf-ib2y"/><rect transform="matrix(-1 0 0 1 15 5.5)" class="jc6w6-bos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:center-horizontal"} {...others} />);
}

export default Component;

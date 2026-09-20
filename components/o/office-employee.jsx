import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9d0a1b9w.css';
import '../../css/x/xct77q-qp.css';
import '../../css/c/cxr4xpqru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r9d0a1b9w"/><path class="xct77q-qp"/><path class="cxr4xpqru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-employee"} {...others} />);
}

export default Component;

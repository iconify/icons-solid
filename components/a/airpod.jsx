import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ypx_wqb6b.css';
import '../../css/c/cw70z5cwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ypx_wqb6b"/><path class="cw70z5cwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:airpod"} {...others} />);
}

export default Component;

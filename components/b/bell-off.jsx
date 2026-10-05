import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q3tvm8bbi.css';
import '../../css/o/oz0g4by4m.css';
import '../../css/h/hzarsdbal.css';
import '../../css/r/r9d8tnb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="q3tvm8bbi"/><path class="oz0g4by4m"/><path class="hzarsdbal"/><path class="r9d8tnb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bell-off"} {...others} />);
}

export default Component;

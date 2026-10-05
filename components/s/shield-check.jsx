import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d3-pthtcv.css';
import '../../css/v/vlyj9qu0o.css';
import '../../css/u/ucf_4ybgi.css';
import '../../css/l/lz9mv9bfc.css';
import '../../css/a/akl_5wqvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="d3-pthtcv"/><path class="vlyj9qu0o"/><path class="ucf_4ybgi"/><path class="lz9mv9bfc"/><path class="akl_5wqvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:shield-check"} {...others} />);
}

export default Component;

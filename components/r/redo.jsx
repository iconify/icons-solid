import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/ms5-2abac.css';
import '../../css/t/tp6smyb_b.css';
import '../../css/n/nqx3omx6e.css';
import '../../css/y/yusuv_bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ms5-2abac"/><path class="tp6smyb_b"/><path class="nqx3omx6e"/><path class="yusuv_bmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:redo"} {...others} />);
}

export default Component;

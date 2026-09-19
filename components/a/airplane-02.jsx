import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbg6tp-rw.css';
import '../../css/p/p4rmzmb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hbg6tp-rw"/><path class="p4rmzmb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:airplane-02"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmulznhph.css';
import '../../css/h/h-hrcfb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xmulznhph"/><path class="h-hrcfb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-unknown"} {...others} />);
}

export default Component;

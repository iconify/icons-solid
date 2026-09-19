import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h-hrcfb_r.css';
import '../../css/e/euxrlwbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h-hrcfb_r"/><path class="euxrlwbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-upload"} {...others} />);
}

export default Component;

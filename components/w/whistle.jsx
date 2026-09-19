import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sgm52obwb.css';
import '../../css/w/whkv66aot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sgm52obwb"/><path class="whkv66aot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:whistle"} {...others} />);
}

export default Component;

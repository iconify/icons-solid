import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iqultvbvz.css';
import '../../css/s/si8melbls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="iqultvbvz"/><path class="si8melbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-02"} {...others} />);
}

export default Component;

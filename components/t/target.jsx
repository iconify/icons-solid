import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/radalq6ve.css';
import '../../css/p/p1u06yilh.css';
import '../../css/w/w06-3acty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="radalq6ve"/><path class="p1u06yilh"/><path class="w06-3acty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:target"} {...others} />);
}

export default Component;

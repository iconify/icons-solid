import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j1k-i4bvt.css';
import '../../css/r/rn-hlhb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="j1k-i4bvt"/><path class="rn-hlhb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pencil"} {...others} />);
}

export default Component;

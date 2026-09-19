import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zpj5trbwg.css';
import '../../css/i/inbvg_6si.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="zpj5trbwg"/><path class="inbvg_6si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:snow"} {...others} />);
}

export default Component;

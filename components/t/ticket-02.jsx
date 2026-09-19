import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/v_482lbna.css';
import '../../css/h/h9ygnpbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="v_482lbna"/><path class="h9ygnpbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ticket-02"} {...others} />);
}

export default Component;

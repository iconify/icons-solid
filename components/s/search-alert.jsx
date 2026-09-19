import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wyoh9_s6k.css';
import '../../css/v/v1qt5dbep.css';
import '../../css/z/zdkc4gb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wyoh9_s6k"/><path class="v1qt5dbep"/><path class="zdkc4gb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:search-alert"} {...others} />);
}

export default Component;

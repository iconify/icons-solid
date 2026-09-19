import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/ey0qnuuke.css';
import '../../css/z/zd5-9ftua.css';
import '../../css/x/xb0ug2b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ey0qnuuke"/><circle class="zd5-9ftua"/><path class="xb0ug2b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hockey"} {...others} />);
}

export default Component;

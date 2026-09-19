import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rcq0ecckh.css';
import '../../css/r/rw6ho_bav.css';
import '../../css/z/zff0n2bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="rcq0ecckh"/><path class="rw6ho_bav"/><path class="zff0n2bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-accept"} {...others} />);
}

export default Component;

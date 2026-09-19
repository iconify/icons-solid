import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xv3kysb5u.css';
import '../../css/d/d1xzs4byt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="xv3kysb5u"/><path class="d1xzs4byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hangout"} {...others} />);
}

export default Component;

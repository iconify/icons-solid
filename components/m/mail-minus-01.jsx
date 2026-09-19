import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pqny5ccrt.css';
import '../../css/i/iuvgjdbsi.css';
import '../../css/x/x6kq82kvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="pqny5ccrt"/><path class="iuvgjdbsi"/><path class="x6kq82kvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-minus-01"} {...others} />);
}

export default Component;

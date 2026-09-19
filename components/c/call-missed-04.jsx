import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hthnzab6b.css';
import '../../css/f/ftnni96og.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="hthnzab6b"/><path class="ftnni96og"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-missed-04"} {...others} />);
}

export default Component;

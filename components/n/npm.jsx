import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/oo4jlxnap.css';
import '../../css/l/l9vhwx7ob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="oo4jlxnap"/><path class="l9vhwx7ob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:npm"} {...others} />);
}

export default Component;

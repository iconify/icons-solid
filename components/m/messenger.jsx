import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bqhzbybbo.css';
import '../../css/w/waov-pqex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="bqhzbybbo"/><path class="waov-pqex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:messenger"} {...others} />);
}

export default Component;

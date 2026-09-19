import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/ryu-_6v4x.css';
import '../../css/i/iip-wdbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ryu-_6v4x"/><path class="iip-wdbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:badge"} {...others} />);
}

export default Component;

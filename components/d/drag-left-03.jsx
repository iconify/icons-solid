import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g528lbb8m.css';
import '../../css/x/xsnx6db8b.css';
import '../../css/p/pskxq8kjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g528lbb8m"/><path class="xsnx6db8b"/><path class="pskxq8kjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drag-left-03"} {...others} />);
}

export default Component;

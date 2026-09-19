import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e3ndp0rzk.css';
import '../../css/n/nzgt8vbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e3ndp0rzk"/><path class="nzgt8vbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:filter-vertical"} {...others} />);
}

export default Component;

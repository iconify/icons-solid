import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v0krm2ihu.css';
import '../../css/f/fa4h6lfyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v0krm2ihu"/><path class="fa4h6lfyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-01"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c1zroabhi.css';
import '../../css/y/yg0_jekpa.css';
import '../../css/i/i64j2pb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c1zroabhi"/><path class="yg0_jekpa"/><path class="i64j2pb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dental-braces"} {...others} />);
}

export default Component;

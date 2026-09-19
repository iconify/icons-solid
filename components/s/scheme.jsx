import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v5tkehbts.css';
import '../../css/a/a5i7uxzyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v5tkehbts"/><path class="a5i7uxzyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scheme"} {...others} />);
}

export default Component;

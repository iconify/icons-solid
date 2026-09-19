import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i64-1ebxw.css';
import '../../css/y/ysvgjxbjj.css';
import '../../css/t/tlifriksx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="i64-1ebxw"/><path class="ysvgjxbjj"/><circle class="tlifriksx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ship-wheel"} {...others} />);
}

export default Component;

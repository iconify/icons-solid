import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q0tuw_b0b.css';
import '../../css/y/yn23mu4wr.css';
import '../../css/w/wqgqwwulx.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q0tuw_b0b"/><path class="yn23mu4wr"/><path class="wqgqwwulx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:dz"} {...others} />);
}

export default Component;

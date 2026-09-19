import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0bk2xb2x.css';
import '../../css/k/kwynr4q2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f0bk2xb2x"/><path class="kwynr4q2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:black-hole"} {...others} />);
}

export default Component;

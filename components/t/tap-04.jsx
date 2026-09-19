import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tj-p18bnk.css';
import '../../css/f/fu7jtmb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tj-p18bnk"/><path class="fu7jtmb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-04"} {...others} />);
}

export default Component;

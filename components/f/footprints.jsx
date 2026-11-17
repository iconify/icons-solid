import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/js41ow7el.css';
import '../../css/z/z88l2pb9x.css';
import '../../css/j/jxr15ubel.css';
import '../../css/q/q9ph29bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="js41ow7el"/><path class="z88l2pb9x"/><path class="jxr15ubel"/><path class="q9ph29bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:footprints"} {...others} />);
}

export default Component;

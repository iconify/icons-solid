import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lq6s65tyu.css';
import '../../css/o/oxcak9zvn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="lq6s65tyu"/><path clip-rule="evenodd" class="oxcak9zvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-plus-bold"} {...others} />);
}

export default Component;

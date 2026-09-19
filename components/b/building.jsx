import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6ohv32yu.css';
import '../../css/u/u-w-26vcx.css';
import '../../css/t/t--kh_brw.css';
import '../../css/z/zmlixrbxk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d6ohv32yu"/><path class="u-w-26vcx"/><path class="t--kh_brw"/><path class="zmlixrbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:building"} {...others} />);
}

export default Component;

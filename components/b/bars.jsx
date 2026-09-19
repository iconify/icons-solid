import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/evtdzvqnx.css';
import '../../css/a/ay5wwjbqg.css';
import '../../css/z/za3ckd01w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="evtdzvqnx"/><path class="ay5wwjbqg"/><path class="za3ckd01w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bars"} {...others} />);
}

export default Component;

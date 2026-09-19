import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/numvsbbtg.css';
import '../../css/t/tbhcwf75b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="numvsbbtg"/><path class="tbhcwf75b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:seek-step"} {...others} />);
}

export default Component;

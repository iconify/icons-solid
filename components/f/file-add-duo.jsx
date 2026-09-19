import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl1xbraru.css';
import '../../css/n/n5yhx2bkg.css';
import '../../css/q/qwd394bsp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zl1xbraru"/><path class="n5yhx2bkg"/><path class="qwd394bsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file-add-duo"} {...others} />);
}

export default Component;

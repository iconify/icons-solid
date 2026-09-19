import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7z2n2wtr.css';
import '../../css/d/dznf5ccgt.css';
import '../../css/x/xerbc4b9w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i7z2n2wtr"/><path class="dznf5ccgt"/><path class="xerbc4b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:joker-duo"} {...others} />);
}

export default Component;

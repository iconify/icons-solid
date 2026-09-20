import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2bh21bwx.css';
import '../../css/b/bsv5quojw.css';
import '../../css/d/dqw2i7ccb.css';
import '../../css/m/mdfze3b9z.css';

const viewBox = {"width":27,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y2bh21bwx"/><path class="bsv5quojw"/><path class="dqw2i7ccb"/><path class="mdfze3b9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ghostty"} {...others} />);
}

export default Component;

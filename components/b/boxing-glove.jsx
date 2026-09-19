import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1znrzx2a.css';
import '../../css/i/i3dorvb1g.css';
import '../../css/h/h6k4ikgxz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b1znrzx2a"/><path clip-rule="evenodd" class="i3dorvb1g"/><path clip-rule="evenodd" class="h6k4ikgxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:boxing-glove"} {...others} />);
}

export default Component;

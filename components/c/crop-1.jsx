import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynthdoexc.css';
import '../../css/c/cgqnn9nff.css';
import '../../css/z/zhuau6b2h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ynthdoexc"/><path clip-rule="evenodd" class="cgqnn9nff"/><path class="zhuau6b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:crop-1"} {...others} />);
}

export default Component;

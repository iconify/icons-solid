import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omb1ouktv.css';
import '../../css/t/tnz8a7sye.css';
import '../../css/a/aqarijb0i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="omb1ouktv"/><path clip-rule="evenodd" class="tnz8a7sye"/><path class="aqarijb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pharmacy-bold"} {...others} />);
}

export default Component;

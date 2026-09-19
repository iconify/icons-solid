import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzhlr9ged.css';
import '../../css/z/zwc8jr9-g.css';
import '../../css/t/tv0rkbbvi.css';
import '../../css/j/j78wzibyw.css';
import '../../css/a/aez4t7x4v.css';
import '../../css/m/mgz6l8bai.css';
import '../../css/z/z7emv6bof.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uzhlr9ged"/><path class="zwc8jr9-g"/><path class="tv0rkbbvi"/><path clip-rule="evenodd" class="j78wzibyw"/><path class="aez4t7x4v"/><path clip-rule="evenodd" class="mgz6l8bai"/><path class="z7emv6bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:house-damage"} {...others} />);
}

export default Component;

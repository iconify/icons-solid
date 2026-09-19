import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o0lrg65in.css';
import '../../css/a/az4-p6b4d.css';
import '../../css/t/txdqe8b7q.css';
import '../../css/z/z-94r2gds.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="o0lrg65in"/><path class="az4-p6b4d"/><path class="txdqe8b7q"/><path class="z-94r2gds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:math"} {...others} />);
}

export default Component;

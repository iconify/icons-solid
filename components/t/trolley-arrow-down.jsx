import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/latz-6nki.css';
import '../../css/b/bcv2mrb4w.css';
import '../../css/c/c-j37uq4f.css';
import '../../css/h/hadrnbvhd.css';
import '../../css/w/wekugib4j.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="latz-6nki"/><path class="bcv2mrb4w"/><path class="c-j37uq4f"/><path class="hadrnbvhd"/><path class="wekugib4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:trolley-arrow-down"} {...others} />);
}

export default Component;

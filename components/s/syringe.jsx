import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c5qci8b2s.css';
import '../../css/c/cbuolj-4j.css';
import '../../css/r/r9a985b0x.css';
import '../../css/b/b888d11zq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="bi12bsetm"><path class="c5qci8b2s"/><path class="cbuolj-4j"/><path class="r9a985b0x"/><path class="b888d11zq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:syringe"} {...others} />);
}

export default Component;

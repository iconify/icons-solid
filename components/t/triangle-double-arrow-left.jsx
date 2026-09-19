import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hk1s8nqdm.css';
import '../../css/e/ejfxmz1gf.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="hk1s8nqdm"/><path class="ejfxmz1gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:triangle-double-arrow-left"} {...others} />);
}

export default Component;

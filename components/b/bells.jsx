import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ob04qqx7v.css';
import '../../css/n/n-omplb0y.css';
import '../../css/t/tennhxbfx.css';
import '../../css/n/nk5xvgx2e.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ob04qqx7v"/><path class="n-omplb0y"/><path class="tennhxbfx"/><path class="nk5xvgx2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bells"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wigb2pkkh.css';
import '../../css/p/pmkj7pb6y.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="wigb2pkkh"/><path class="pmkj7pb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:scissor-line-cut"} {...others} />);
}

export default Component;

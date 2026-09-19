import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mlkrqcdzy.css';
import '../../css/l/lkirl3btc.css';
import '../../css/o/opbqqrbau.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="mlkrqcdzy"/><path class="lkirl3btc"/><path class="opbqqrbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:inbox-download"} {...others} />);
}

export default Component;

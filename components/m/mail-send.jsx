import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/castx7b-i.css';
import '../../css/k/kxk1ljbls.css';
import '../../css/l/lwk02zbcd.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="castx7b-i"/><path class="kxk1ljbls"/><path class="lwk02zbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:mail-send"} {...others} />);
}

export default Component;

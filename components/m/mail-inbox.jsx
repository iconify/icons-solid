import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e_shtx8ok.css';
import '../../css/k/kxk1ljbls.css';
import '../../css/e/eko1wqb5i.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="e_shtx8ok"/><path class="kxk1ljbls"/><path class="eko1wqb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:mail-inbox"} {...others} />);
}

export default Component;

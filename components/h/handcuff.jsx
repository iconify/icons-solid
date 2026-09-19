import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dq8d4dbot.css';
import '../../css/t/tkiwk1b_f.css';

const viewBox = {"width":16,"height":14};
const content = `<g class="n1lsf0bnc"><path class="dq8d4dbot"/><path class="tkiwk1b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:handcuff"} {...others} />);
}

export default Component;

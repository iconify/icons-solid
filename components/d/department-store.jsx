import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i47nbgbrf.css';
import '../../css/o/o5p2w8b9h.css';
import '../../css/c/cbgd6lblv.css';
import '../../css/e/e3rm47bbh.css';
import '../../css/c/c838azbgm.css';
import '../../css/o/oe5tcabos.css';
import '../../css/h/h1pqy7but.css';
import '../../css/n/n5-hcgitu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="i47nbgbrf"/><path class="o5p2w8b9h"/><path class="cbgd6lblv"/><path class="e3rm47bbh"/><path class="c838azbgm"/><path class="oe5tcabos"/><path class="h1pqy7but"/><path class="n5-hcgitu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:department-store"} {...others} />);
}

export default Component;

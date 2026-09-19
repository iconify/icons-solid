import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygkeg-b_d.css';
import '../../css/i/iaz0qzbtu.css';
import '../../css/u/u9i6iz7fs.css';
import '../../css/o/o4-vnynez.css';
import '../../css/v/vgc2y5bcl.css';
import '../../css/z/zi4-8j33h.css';
import '../../css/u/u4o49ubjq.css';
import '../../css/i/iclu1xb9t.css';
import '../../css/g/gldtl7jch.css';
import '../../css/e/ei5fx7bst.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ygkeg-b_d"/><rect class="iaz0qzbtu"/><path class="u9i6iz7fs"/><circle class="o4-vnynez"/><path class="vgc2y5bcl"/><path class="zi4-8j33h"/><path class="u4o49ubjq"/><path class="iclu1xb9t"/><path class="gldtl7jch"/><path class="ei5fx7bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:camping"} {...others} />);
}

export default Component;

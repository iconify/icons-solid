import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/s/s_5rrdb7b.css';
import '../../css/i/iq7w8h2jf.css';
import '../../css/k/kuar6yfma.css';
import '../../css/f/fk592nv7k.css';
import '../../css/a/a1tx6bc4w.css';
import '../../css/r/rfdp__b7m.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="s_5rrdb7b"/><path class="iq7w8h2jf"/><path class="kuar6yfma"/></g><path clip-rule="evenodd" class="fk592nv7k"/><path clip-rule="evenodd" class="a1tx6bc4w"/><path clip-rule="evenodd" class="rfdp__b7m"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:checkmark-outlined-off"} {...others} />);
}

export default Component;

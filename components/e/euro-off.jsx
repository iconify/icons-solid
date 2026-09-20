import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/f/f45he6j8z.css';
import '../../css/y/yew2subez.css';
import '../../css/v/v_32bvaot.css';
import '../../css/p/pk0xzxb8w.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="f45he6j8z"/><path class="yew2subez"/></g><path clip-rule="evenodd" class="v_32bvaot"/><path clip-rule="evenodd" class="pk0xzxb8w"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:euro-off"} {...others} />);
}

export default Component;

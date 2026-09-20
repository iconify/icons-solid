import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/e/efper0b_o.css';
import '../../css/l/l87812muk.css';
import '../../css/j/je5vd7bsn.css';
import '../../css/i/i3s9_b4fi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="efper0b_o"/><path class="l87812muk"/></g><path clip-rule="evenodd" class="je5vd7bsn"/><path clip-rule="evenodd" class="i3s9_b4fi"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:down-left-off"} {...others} />);
}

export default Component;

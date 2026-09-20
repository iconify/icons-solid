import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzhz2ib_o.css';
import '../../css/a/ayfjkbc7k.css';
import '../../css/w/wn5w14b5n.css';
import '../../css/t/tby9oe12w.css';
import '../../css/z/zcmukr9rg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pzhz2ib_o"/><path class="ayfjkbc7k"/><path class="wn5w14b5n"/><path class="tby9oe12w"/><path class="zcmukr9rg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-2-outline"} {...others} />);
}

export default Component;

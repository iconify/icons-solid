import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j-_nbds1f.css';
import '../../css/h/h7a8jid9n.css';
import '../../css/k/kh6fv0bkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="j-_nbds1f"/><path class="h7a8jid9n"/><path class="kh6fv0bkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:siren-outline"} {...others} />);
}

export default Component;

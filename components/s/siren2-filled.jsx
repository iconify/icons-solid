import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avskq2y1q.css';
import '../../css/f/fhlmw7bsz.css';
import '../../css/q/qr6e_mnfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="avskq2y1q"/><path clip-rule="evenodd" class="fhlmw7bsz"/><path class="qr6e_mnfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:siren2-filled"} {...others} />);
}

export default Component;

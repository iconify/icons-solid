import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qnmts8ajg.css';
import '../../css/o/otxwmwbyz.css';
import '../../css/l/lzwe0dohb.css';
import '../../css/i/iybdt-b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qnmts8ajg"/><path class="otxwmwbyz"/><path class="lzwe0dohb"/><path class="iybdt-b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-console"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6-sdvapm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imag2ybny.css';
import '../../css/f/f3_b4ijst.css';
import '../../css/b/bqtd5gbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6-sdvapm secondary"/><g class="dt0cm9dhy primary"><path class="imag2ybny"/><path class="f3_b4ijst"/><path class="bqtd5gbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:archive-duo"} {...others} />);
}

export default Component;

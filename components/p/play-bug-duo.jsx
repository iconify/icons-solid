import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk1iapbhj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vbe8lbbcp.css';
import '../../css/t/t3i5tcbhl.css';
import '../../css/e/ekp9r-bkm.css';
import '../../css/u/u8lek1bgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sk1iapbhj"/><g class="dt0cm9dhy primary"><path class="vbe8lbbcp"/><path class="t3i5tcbhl"/><path class="ekp9r-bkm"/><path class="u8lek1bgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:play-bug-duo"} {...others} />);
}

export default Component;

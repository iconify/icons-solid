import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ib6wldbhv.css';
import '../../css/k/kbxpyqdun.css';
import '../../css/x/xfj94vbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ib6wldbhv"/><path class="kbxpyqdun"/><path class="xfj94vbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-rook"} {...others} />);
}

export default Component;

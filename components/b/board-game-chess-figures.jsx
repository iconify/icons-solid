import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w4twh_sgx.css';
import '../../css/a/agh84lb_e.css';
import '../../css/r/rx9x-xbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w4twh_sgx"/><path class="agh84lb_e"/><path class="rx9x-xbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:board-game-chess-figures"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lpxkeb6wa.css';
import '../../css/i/ikcx5dxqo.css';
import '../../css/l/l9qsn4rxr.css';
import '../../css/o/ow9pvz9jr.css';
import '../../css/u/uhc6nkbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lpxkeb6wa"/><path class="ikcx5dxqo"/><path class="l9qsn4rxr"/><path class="ow9pvz9jr"/><path class="uhc6nkbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:incognito"} {...others} />);
}

export default Component;

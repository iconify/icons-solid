import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8aymsbir.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dgznh9z6x.css';
import '../../css/i/iu0-ovbgw.css';
import '../../css/r/rvpalfbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p8aymsbir secondary"/><g class="dt0cm9dhy primary"><path class="dgznh9z6x"/><path class="iu0-ovbgw"/><path class="rvpalfbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:presentation-duo"} {...others} />);
}

export default Component;

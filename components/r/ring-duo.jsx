import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao03dfw0g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ksjg_ccnr.css';
import '../../css/r/r66u58wsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ao03dfw0g secondary"/><g class="dt0cm9dhy primary"><path class="ksjg_ccnr"/><path class="r66u58wsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ring-duo"} {...others} />);
}

export default Component;

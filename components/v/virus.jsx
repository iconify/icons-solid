import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xqunm-tmm.css';
import '../../css/x/xyzpfmoeg.css';
import '../../css/f/flre5izaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xqunm-tmm"/><path class="xyzpfmoeg"/><path class="flre5izaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:virus"} {...others} />);
}

export default Component;

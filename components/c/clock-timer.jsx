import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svl_dtbvc.css';
import '../../css/r/rbmb9m21o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="svl_dtbvc"/><path clip-rule="evenodd" class="rbmb9m21o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:clock-timer"} {...others} />);
}

export default Component;

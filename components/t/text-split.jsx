import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/w/wnxmdjbom.css';
import '../../css/p/pokq2rrtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cfkicbk9n"/><path class="wnxmdjbom"/><path class="pokq2rrtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:text-split"} {...others} />);
}

export default Component;

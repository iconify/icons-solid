import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxrezzt9x.css';
import '../../css/l/lutbgcatj.css';
import '../../css/s/smbbhfb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wxrezzt9x"/><path class="lutbgcatj"/><path class="smbbhfb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:trash-x-solid"} {...others} />);
}

export default Component;

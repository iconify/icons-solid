import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxfyl1b5k.css';
import '../../css/u/urqpr_-7e.css';
import '../../css/x/xip7p4b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="alert-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="oxfyl1b5k"/><path clip-rule="evenodd" class="urqpr_-7e"/><path class="xip7p4b3y"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:alert-outline"} {...others} />);
}

export default Component;

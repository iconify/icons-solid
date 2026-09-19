import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxfyl1b5k.css';
import '../../css/e/ewzk12bfc.css';
import '../../css/l/lkta0p-5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="help-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="oxfyl1b5k"/><path class="ewzk12bfc"/><path clip-rule="evenodd" class="lkta0p-5n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:help-outline"} {...others} />);
}

export default Component;

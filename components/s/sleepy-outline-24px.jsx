import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l132zcc0f.css';
import '../../css/b/bduw573rj.css';
import '../../css/g/gnezv3kba.css';
import '../../css/d/dsfjv5buk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l132zcc0f"/><path class="bduw573rj"/><path clip-rule="evenodd" class="gnezv3kba"/><path class="dsfjv5buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sleepy-outline-24px"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c5ik97bsm.css';
import '../../css/c/c4pd3lb9b.css';
import '../../css/f/f9fxuac1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c5ik97bsm"/><path class="c4pd3lb9b"/><path clip-rule="evenodd" class="f9fxuac1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-add"} {...others} />);
}

export default Component;

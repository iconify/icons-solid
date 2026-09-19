import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9r51abmb.css';
import '../../css/d/dj-4gtblq.css';
import '../../css/y/y46nsnbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c9r51abmb"/><path clip-rule="evenodd" class="dj-4gtblq"/><path class="y46nsnbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:insert-after-o"} {...others} />);
}

export default Component;
